# 🌬️ Digital Twin - Turbina Eólica

Demo interactiva de un **Digital Twin (Gemelo Digital)** de una turbina eólica, ahora construida con **React + TypeScript + Vite**.

## 🚀 Tecnologías

### Core
- **React 18**: Modern UI library con hooks
- **TypeScript**: Desarrollo type-safe
- **Vite**: Dev server y build tool ultra rápido

### 3D & Visualización
- **Three.js**: Visualización 3D de turbina eólica
- **Chart.js + react-chartjs-2**: Gráficas de datos en tiempo real

### Arquitectura
- **Componentes Modulares**: Separados por funcionalidad
- **Custom Hooks**: `useWindTurbine` para gestión de estado
- **TypeScript Interfaces**: Estructuras de datos fuertemente tipadas

## ✨ Características

- 🌬️ **Visualización 3D en tiempo real** con Three.js
- 📊 **Métricas de sensores en vivo** (velocidad viento, RPM, potencia, temperatura)
- 📈 **Gráficas históricas** con Chart.js
- 🎮 **Controles interactivos** (pausar rotación, encender/apagar)
- 📱 **Diseño responsive** para todos los tamaños de pantalla
- 🏗️ **Arquitectura modular de componentes**
- 🔒 **TypeScript** para seguridad de tipos

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── Header/          # Encabezado de la app
│   ├── Footer/          # Pie de página
│   ├── WindTurbine3D/   # Visualización 3D con Three.js
│   ├── VisualizationPanel/  # Wrapper del panel 3D
│   ├── MetricsPanel/    # Panel de métricas en tiempo real
│   ├── MetricCard/      # Tarjeta de métrica individual
│   ├── StatusBar/       # Indicador de estado
│   ├── ControlPanel/    # Botones de control
│   ├── PowerChart/      # Gráfica de potencia generada
│   └── WindChart/       # Gráfica de velocidad del viento
├── hooks/               # Custom React hooks
│   └── useWindTurbine.ts  # Gestión de estado de turbina
├── types/               # Interfaces TypeScript
│   └── index.ts         # Definiciones de tipos
├── App.tsx              # Componente principal
├── App.css              # Estilos globales
├── main.tsx             # Punto de entrada React
└── index.css            # CSS base
```

## 🏁 Instalación y Ejecución

### Requisitos Previos
- Node.js 16+ y npm

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
La app se abrirá en `http://localhost:3000`

### Build para Producción
```bash
npm run build
```

### Vista Previa del Build
```bash
npm run preview
```

## 🧩 Componentes Clave

### Hook `useWindTurbine`
Gestiona todo el estado de la turbina y simulación de datos de sensores:
- Actualización de datos de sensores cada segundo
- Simulación realista de viento y generación de potencia
- Transiciones suaves de velocidad de rotación
- Registro de datos históricos (últimos 60 segundos)

### Componente `WindTurbine3D`
Visualización 3D con Three.js:
- Modelo realista de turbina eólica con torre, nacelle, hub y aspas
- Rotación dinámica basada en datos de sensores
- Iluminación y sombras adecuadas
- Canvas responsive

### Componentes de Gráficas
Visualización de datos en tiempo real:
- Potencia generada a lo largo del tiempo
- Tendencias de velocidad del viento
- Auto-actualización con nuevos datos
- Integración de Chart.js con React

## 🎓 Uso en Presentación

Esta demo ilustra los conceptos clave de un Digital Twin:

1. **Objeto físico virtual**: Turbina eólica en 3D
2. **Datos en tiempo real**: Sensores simulados actualizándose cada segundo
3. **Visualización de métricas**: Panel con 4 métricas principales
4. **Análisis histórico**: Gráficas con datos de los últimos 60 segundos
5. **Interactividad**: Control sobre el estado del sistema

## 🤔 ¿Qué es un Digital Twin?

Un **Digital Twin** es una representación virtual de un objeto o sistema físico que:
- Usa datos de sensores en tiempo real (IoT)
- Simula comportamiento y rendimiento
- Permite mantenimiento predictivo
- Optimiza operaciones
- Prueba escenarios sin riesgo físico

Esta demo muestra:
✅ Simulación de datos de sensores en tiempo real  
✅ Sincronización del modelo 3D  
✅ Monitoreo de rendimiento  
✅ Capacidades de control interactivo  

¡Perfecto para entender cómo funcionan los digital twins en aplicaciones industriales IoT!

## 🛠️ Notas de Desarrollo

- **Arquitectura basada en componentes** para mantenibilidad
- **TypeScript** para seguridad de tipos y mejor soporte IDE
- **CSS por componente** para estilos con scope
- **React hooks** para gestión de estado
- **Custom hooks** para separar lógica de negocio de UI

---

**Creado para Chapter Tecnológico - Digital Twins Demo**
