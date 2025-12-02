# 🧩 Componentes del Proyecto - Referencia Visual

## 📐 Árbol de Componentes

```
<App>
  │
  ├─ <Header />
  │   └─ Título y subtítulo
  │
  ├─ <main-content>
  │   ├─ <VisualizationPanel>
  │   │   ├─ <WindTurbine3D />
  │   │   │   └─ Three.js Scene
  │   │   └─ <ControlPanel>
  │   │       ├─ Button: Pausar/Reanudar
  │   │       └─ Button: Apagar/Encender
  │   │
  │   └─ <MetricsPanel>
  │       ├─ <MetricCard> Velocidad Viento
  │       ├─ <MetricCard> RPM
  │       ├─ <MetricCard> Potencia
  │       ├─ <MetricCard> Temperatura
  │       └─ <StatusBar />
  │
  ├─ <charts-section>
  │   ├─ <PowerChart />
  │   │   └─ Chart.js Line Chart
  │   └─ <WindChart />
  │       └─ Chart.js Line Chart
  │
  ├─ <explanation-section>
  │   └─ Sección informativa (HTML estático)
  │
  └─ <Footer />
      └─ Copyright y créditos
```

## 🎨 Guía de Componentes

### 🏠 App (src/App.tsx)
**Props:** Ninguna  
**Estado:** Usa `useWindTurbine()` hook  
**Responsabilidad:** Componente raíz, orquesta toda la aplicación

---

### 📋 Header (src/components/Header/)
**Props:** Ninguna  
**Estilo:** Header.css  
**Contenido:** 
- Título con emoji 🌬️
- Subtítulo

---

### 🌬️ WindTurbine3D (src/components/WindTurbine3D/)
**Props:**
```typescript
{
  turbineState: TurbineState
}
```
**Responsabilidad:**
- Crear scene Three.js
- Renderizar turbina 3D
- Animar rotación de aspas
- Cleanup de recursos

**Elementos 3D:**
- Ground (plano verde)
- Tower (cilindro gris)
- Nacelle (caja blanca)
- Hub (esfera)
- Blades (3 aspas blancas)

---

### 🎮 ControlPanel (src/components/ControlPanel/)
**Props:**
```typescript
{
  isRotating: boolean;
  isPoweredOn: boolean;
  onToggleRotation: () => void;
  onTogglePower: () => void;
}
```
**Responsabilidad:**
- Mostrar botones de control
- Cambiar texto según estado
- Aplicar estilos condicionales

---

### 📦 VisualizationPanel (src/components/VisualizationPanel/)
**Props:**
```typescript
{
  turbineState: TurbineState;
  onToggleRotation: () => void;
  onTogglePower: () => void;
}
```
**Responsabilidad:**
- Wrapper para WindTurbine3D y ControlPanel
- Coordinar visualización 3D con controles

---

### 📊 MetricsPanel (src/components/MetricsPanel/)
**Props:**
```typescript
{
  sensorData: SensorData
}
```
**Responsabilidad:**
- Mostrar grid de 4 métricas
- Mostrar StatusBar
- Calcular timestamp actual

---

### 📋 MetricCard (src/components/MetricCard/)
**Props:**
```typescript
{
  icon: string;         // Emoji
  label: string;        // "Velocidad del Viento"
  value: number;        // 8.5
  unit: string;         // "m/s"
  className?: string;   // "wind", "rpm", "power", "temp"
}
```
**Responsabilidad:**
- Mostrar una métrica individual
- Formatear valor con 1 decimal
- Aplicar estilos según tipo

**Variantes:**
- `.wind` - Azul claro
- `.rpm` - Azul medio
- `.power` - Naranja
- `.temp` - Rojo

---

### 🚦 StatusBar (src/components/StatusBar/)
**Props:**
```typescript
{
  status: string;      // "🟢 Operacional"
  timestamp: string;   // "14:32:15"
}
```
**Responsabilidad:**
- Mostrar estado actual
- Mostrar hora actual

---

### 📈 PowerChart (src/components/PowerChart/)
**Props:**
```typescript
{
  dataHistory: DataHistory
}
```
**Responsabilidad:**
- Mostrar gráfica de potencia
- Configurar Chart.js con opciones
- Actualizar datos automáticamente

**Configuración:**
- Tipo: Line
- Color: Verde agua (rgb(75, 192, 192))
- Max Y: 2000 kW
- Fill: true

---

### 📈 WindChart (src/components/WindChart/)
**Props:**
```typescript
{
  dataHistory: DataHistory
}
```
**Responsabilidad:**
- Mostrar gráfica de velocidad del viento
- Configurar Chart.js con opciones
- Actualizar datos automáticamente

**Configuración:**
- Tipo: Line
- Color: Azul (rgb(54, 162, 235))
- Max Y: 25 m/s
- Fill: true

---

### 👣 Footer (src/components/Footer/)
**Props:** Ninguna  
**Responsabilidad:** Mostrar créditos

---

## 🪝 Custom Hook: useWindTurbine

**Ubicación:** `src/hooks/useWindTurbine.ts`

**Retorna:**
```typescript
{
  sensorData: SensorData;
  dataHistory: DataHistory;
  turbineState: TurbineState;
  toggleRotation: () => void;
  togglePower: () => void;
}
```

**Funcionalidad:**
- 🔄 Actualiza sensores cada 1 segundo
- 📊 Mantiene histórico de 60 puntos
- 🎮 Controla estado de rotación y encendido
- 🧮 Simula datos realistas de turbina

**Lógica de Simulación:**
```javascript
// Viento base con variación
baseWind = 8;
windVariation = random(-1.5, 1.5);
windSpeed = baseWind + windVariation;

// RPM basado en viento
rpm = windSpeed * 1.5;

// Potencia (0-2000 kW)
powerFactor = min(1, windSpeed / 12);
power = powerFactor * 1800;

// Temperatura aumenta con RPM
temperature = 22 + (rpm / 30) * 15;
```

---

## 📝 Types (src/types/index.ts)

### SensorData
```typescript
interface SensorData {
  windSpeed: number;      // m/s
  rpm: number;           // Revoluciones por minuto
  power: number;         // kW
  temperature: number;   // °C
  status: string;        // Estado con emoji
}
```

### DataHistory
```typescript
interface DataHistory {
  time: string[];       // HH:MM:SS
  power: number[];      // Valores de potencia
  wind: number[];       // Valores de viento
}
```

### TurbineState
```typescript
interface TurbineState {
  isRotating: boolean;
  isPoweredOn: boolean;
  rotationSpeed: number;
}
```

---

## 🎨 Guía de Estilos

### Colores Principales
- **Background**: Gradiente #1a1a2e → #4a47d8
- **Cards**: #0f0f1e → #0d1628
- **Accent**: #3533cd (Azul púrpura)
- **Text**: #e8e8e8 (Blanco grisáceo)

### Espaciado
- Container padding: 20px
- Grid gap: 20px
- Card padding: 25px
- Border radius: 15px (cards), 8px (buttons)

### Responsive Breakpoints
- Desktop: > 1024px (2 columnas)
- Tablet: 768px - 1024px (1 columna)
- Mobile: < 768px (stack vertical)

---

## 🔄 Flujo de Datos

### Inicialización
```
App monta
  → useWindTurbine inicializa estado
  → setInterval inicia (1000ms)
  → updateSensorData()
  → updateDataHistory()
```

### Actualización (cada segundo)
```
Timer tick
  → Calcular nuevos valores de sensores
  → setSensorData()
  → Agregar a histórico
  → setDataHistory()
  → React re-render componentes afectados
    → MetricsPanel actualiza métricas
    → Charts actualizan gráficas
    → WindTurbine3D ajusta rotación
```

### Interacción Usuario
```
Usuario click "Pausar"
  → onToggleRotation()
  → setTurbineState({ isRotating: false })
  → React re-render
  → WindTurbine3D detiene animación
  → Botón cambia a "Reanudar"
```

---

## 📚 Convenciones de Código

### Naming
- **Componentes**: PascalCase (MetricCard.tsx)
- **Hooks**: camelCase con "use" (useWindTurbine.ts)
- **Tipos**: PascalCase (SensorData)
- **CSS**: kebab-case (.metric-card)

### Estructura de Archivos
```
ComponentName/
  ├── ComponentName.tsx    # Lógica
  ├── ComponentName.css    # Estilos
  └── index.ts            # Export
```

### Imports
```typescript
// Types
import { SensorData } from '@/types';

// Hooks
import { useWindTurbine } from '@/hooks/useWindTurbine';

// Components
import { MetricCard } from '@/components/MetricCard';
```

---

## 🐛 Debugging Tips

### Ver estado en DevTools
```typescript
// En useWindTurbine.ts, agregar:
useEffect(() => {
  console.log('Sensor Data:', sensorData);
}, [sensorData]);
```

### Ver props en componente
```typescript
// En cualquier componente:
console.log('Props:', { turbineState, sensorData });
```

### Verificar Three.js
```typescript
// En WindTurbine3D.tsx:
console.log('Scene:', sceneRef.current);
console.log('Blades:', bladesRef.current);
```

---

## ✅ Testing Checklist por Componente

- [ ] **Header**: Se muestra título y subtítulo
- [ ] **WindTurbine3D**: Turbina visible, aspas rotan
- [ ] **ControlPanel**: Botones cambian texto al hacer click
- [ ] **MetricCard**: Valores se actualizan cada segundo
- [ ] **StatusBar**: Hora se actualiza
- [ ] **PowerChart**: Gráfica se dibuja y actualiza
- [ ] **WindChart**: Gráfica se dibuja y actualiza
- [ ] **Footer**: Se muestra al final

---

¡Usa este documento como referencia rápida mientras desarrollas! 🚀
