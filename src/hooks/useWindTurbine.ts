import { useState, useEffect, useCallback } from 'react';
import { SensorData, DataHistory, TurbineState } from '@/types';

const MAX_HISTORY_POINTS = 60;

export const useWindTurbine = () => {
  const [sensorData, setSensorData] = useState<SensorData>({
    windSpeed: 0,
    rpm: 0,
    power: 0,
    temperature: 20,
    status: '🟢 Operacional',
  });

  const [dataHistory, setDataHistory] = useState<DataHistory>({
    time: [],
    power: [],
    wind: [],
  });

  const [turbineState, setTurbineState] = useState<TurbineState>({
    isRotating: true,
    isPoweredOn: true,
    rotationSpeed: 0.3, // Empezar directamente con velocidadd
  });

  const updateSensorData = useCallback(() => {
    setSensorData((prev) => {
      if (!turbineState.isPoweredOn) {
        return {
          windSpeed: Math.max(0, prev.windSpeed * 0.95),
          rpm: Math.max(0, prev.rpm * 0.9),
          power: Math.max(0, prev.power * 0.9),
          temperature: prev.temperature,
          status: '🔴 Apagada',
        };
      }

      // Simulate realistic wind turbine behavior
      const baseWind = 8;
      const windVariation = (Math.random() - 0.5) * 3;
      const windSpeed = Math.max(0, Math.min(25, baseWind + windVariation));

      // RPM based on wind speed (typical range: 10-20 RPM for large turbines)
      const rpm = Math.max(0, windSpeed * 1.5 + (Math.random() - 0.5) * 2);

      // Power generation (typically 0-2000 kW)
      const powerFactor = Math.min(1, windSpeed / 12);
      const power = Math.max(
        0,
        Math.round(powerFactor * 1800 + (Math.random() - 0.5) * 100)
      );

      // Temperature increases with operation
      const baseTemp = 22;
      const tempIncrease = (rpm / 30) * 15;
      const temperature = baseTemp + tempIncrease + (Math.random() - 0.5) * 2;

      let status = '🟢 Operacional';
      if (windSpeed > 20) status = '🟡 Viento Alto';
      if (temperature > 45) status = '🟠 Alta Temperatura';

      return { windSpeed, rpm, power, temperature, status };
    });
  }, [turbineState.isPoweredOn]);

  const updateDataHistory = useCallback(() => {
    const now = new Date();
    const timeLabel = now.toLocaleTimeString('es-ES');

    setDataHistory((prev) => {
      const newHistory = {
        time: [...prev.time, timeLabel],
        power: [...prev.power, sensorData.power],
        wind: [...prev.wind, sensorData.windSpeed],
      };

      // Keep only last MAX_HISTORY_POINTS data points
      if (newHistory.time.length > MAX_HISTORY_POINTS) {
        return {
          time: newHistory.time.slice(-MAX_HISTORY_POINTS),
          power: newHistory.power.slice(-MAX_HISTORY_POINTS),
          wind: newHistory.wind.slice(-MAX_HISTORY_POINTS),
        };
      }

      return newHistory;
    });
  }, [sensorData.power, sensorData.windSpeed]);

  const toggleRotation = useCallback(() => {
    setTurbineState((prev) => ({
      ...prev,
      isRotating: !prev.isRotating,
    }));
  }, []);

  const togglePower = useCallback(() => {
    setTurbineState((prev) => ({
      ...prev,
      isPoweredOn: !prev.isPoweredOn,
    }));
  }, []);

  // Update sensor data every second
  useEffect(() => {
    const interval = setInterval(() => {
      updateSensorData();
      updateDataHistory();
    }, 1000);

    return () => clearInterval(interval);
  }, [updateSensorData, updateDataHistory]);

  // Update rotation speed based on RPM
  useEffect(() => {
    setTurbineState((prev) => {
      if (prev.isRotating && prev.isPoweredOn) {
        const targetSpeed = sensorData.rpm / 40; // si quiero que vaya mas rapido poner /10
        const newSpeed = prev.rotationSpeed + (targetSpeed - prev.rotationSpeed) * 0.5; // Aumentado a 0.5 para alcanzar velocidad rápidamente
        return { ...prev, rotationSpeed: newSpeed };
      } else if (!prev.isRotating) {
        // Pausa instantánea cuando isRotating = false
        return { ...prev, rotationSpeed: 0 };
      } else if (!prev.isPoweredOn) {
        // Reducir velocidad gradualmente solo si está apagado
        const newSpeed = prev.rotationSpeed * 0.92;
        return { ...prev, rotationSpeed: newSpeed };
      }
      return prev;
    });
  }, [sensorData.rpm, turbineState.isRotating, turbineState.isPoweredOn]);

  return {
    sensorData,
    dataHistory,
    turbineState,
    toggleRotation,
    togglePower,
  };
};
