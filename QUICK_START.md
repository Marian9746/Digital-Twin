# 🚀 Guía de Inicio Rápido

## El proyecto ya está corriendo en: http://localhost:3000

## 📋 Próximos Pasos

### 1. Verifica que todo funciona
- ✅ Abre http://localhost:3000 en tu navegador
- ✅ Verifica que la turbina 3D se muestra y rota
- ✅ Comprueba que las métricas se actualizan cada segundo
- ✅ Prueba los botones de control (Pausar/Encender)
- ✅ Verifica que las gráficas se dibujan y actualizan

### 2. Explora el código

#### Componentes Principales
```
src/
├── App.tsx                      ← Empieza aquí
├── hooks/useWindTurbine.ts      ← Lógica principal
├── components/
│   ├── WindTurbine3D/          ← Visualización 3D
│   ├── MetricsPanel/           ← Panel de métricas
│   └── PowerChart/WindChart/   ← Gráficas
└── types/index.ts              ← Definiciones TypeScript
```

#### Archivos de Documentación
- `README.md` - Documentación general del proyecto
- `RESTRUCTURE_SUMMARY.md` - Resumen completo de la reestructuración
- `COMPONENTS_GUIDE.md` - Guía detallada de cada componente
- `QUICK_START.md` - Este archivo

### 3. Haz cambios y experimenta

#### Cambiar color de la turbina
```typescript
// src/components/WindTurbine3D/WindTurbine3D.tsx
// Línea ~106 - Cambiar color de las aspas
const bladeMaterial = new THREE.MeshStandardMaterial({ 
  color: 0xff0000  // Cambia a rojo!
});
```

#### Cambiar velocidad de actualización
```typescript
// src/hooks/useWindTurbine.ts
// Línea ~110 - Cambiar intervalo de actualización
setInterval(() => {
  updateSensorData();
  updateDataHistory();
}, 500);  // Actualizar cada 0.5 segundos en vez de 1
```

#### Añadir nueva métrica
1. Actualiza `SensorData` en `src/types/index.ts`
2. Añade cálculo en `useWindTurbine.ts`
3. Añade nuevo `<MetricCard>` en `MetricsPanel.tsx`

### 4. Comandos Útiles

#### Desarrollo
```bash
npm run dev          # Ejecutar servidor de desarrollo
# Servidor en http://localhost:3000
# Hot reload automático
```

#### Build
```bash
npm run build        # Compilar para producción
# Salida en: dist/
```

#### Preview
```bash
npm run preview      # Ver el build de producción
# Servidor en http://localhost:4173
```

#### Detener servidor
```
Ctrl + C en la terminal
```

### 5. Estructura de un Componente

Cuando crees un nuevo componente, sigue esta estructura:

```typescript
// src/components/MiComponente/MiComponente.tsx
import './MiComponente.css';

interface MiComponenteProps {
  titulo: string;
  valor: number;
}

export const MiComponente: React.FC<MiComponenteProps> = ({ 
  titulo, 
  valor 
}) => {
  return (
    <div className="mi-componente">
      <h3>{titulo}</h3>
      <p>{valor}</p>
    </div>
  );
};
```

```css
/* src/components/MiComponente/MiComponente.css */
.mi-componente {
  padding: 20px;
  background: #0f0f1e;
  border-radius: 10px;
}
```

```typescript
// src/components/MiComponente/index.ts
export { MiComponente } from './MiComponente';
```

### 6. Tips de Desarrollo

#### Hot Reload
Los cambios en el código se reflejan automáticamente en el navegador. No necesitas recargar manualmente.

#### TypeScript IntelliSense
Usa Ctrl+Space para autocompletado de tipos.

#### React DevTools
Instala la extensión de React DevTools para Chrome/Firefox para inspeccionar componentes.

#### Three.js Inspector
Usa `console.log(sceneRef.current)` para inspeccionar la escena 3D.

### 7. Solución de Problemas

#### El servidor no inicia
```bash
# Verifica que las dependencias estén instaladas
npm install

# Si hay errores de puerto, cambia el puerto en vite.config.ts
```

#### TypeScript muestra errores
```bash
# Limpia y reinstala dependencias
rm -rf node_modules
npm install
```

#### La turbina 3D no se muestra
- Abre DevTools (F12) y busca errores en Console
- Verifica que Three.js se haya instalado correctamente
- Revisa que el canvas tenga tamaño: inspecciona `.wind-turbine-3d`

#### Las gráficas no se muestran
- Verifica que Chart.js esté instalado
- Revisa la consola para errores de registro de Chart.js
- Confirma que `dataHistory` tiene datos

### 8. Recursos de Aprendizaje

**React:**
- https://react.dev/learn - Tutorial oficial de React
- https://react.dev/reference/react - API Reference

**TypeScript:**
- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://react-typescript-cheatsheet.netlify.app/

**Three.js:**
- https://threejs.org/docs/ - Documentación oficial
- https://threejs-journey.com/ - Curso completo (gratis los primeros capítulos)

**Chart.js:**
- https://www.chartjs.org/docs/latest/ - Documentación
- https://react-chartjs-2.js.org/ - React wrapper

**Vite:**
- https://vitejs.dev/guide/ - Guía oficial

### 9. Próximas Características (Ideas)

- [ ] Añadir animación de nubes en el fondo 3D
- [ ] Implementar modo oscuro/claro
- [ ] Añadir alertas visuales cuando temperatura > 50°C
- [ ] Guardar histórico en localStorage
- [ ] Añadir gráfica de eficiencia energética
- [ ] Implementar vista móvil con swipe entre secciones
- [ ] Añadir sonido de viento (Web Audio API)
- [ ] Conectar a API real de datos meteorológicos

### 10. Deployment

#### Build para producción
```bash
npm run build
```

La carpeta `dist/` contiene el build optimizado listo para deployment.

#### Opciones de hosting gratuito:
- **Vercel**: Automático con GitHub - https://vercel.com
- **Netlify**: Drag & drop o GitHub - https://netlify.com
- **GitHub Pages**: Hosting gratis en tu repo
- **Cloudflare Pages**: Build automático

---

## 🎉 ¡Listo para Desarrollar!

El proyecto está **completamente funcional** y listo para:
- ✅ Presentación en Chapter Tecnológico
- ✅ Desarrollo de nuevas features
- ✅ Aprendizaje de React + TypeScript
- ✅ Experimentación con Three.js y Chart.js

**¿Preguntas?** Revisa los archivos de documentación:
- `README.md` - Overview general
- `RESTRUCTURE_SUMMARY.md` - Detalles técnicos
- `COMPONENTS_GUIDE.md` - Referencia de componentes

**¡Happy Coding!** 🚀💻✨
