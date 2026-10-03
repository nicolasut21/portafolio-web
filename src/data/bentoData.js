export const processData = {
  define: {
    num: '01',
    name: 'DEFINE',
    desc: 'Investigación exhaustiva, empatía con el usuario y análisis de requerimientos de negocio para identificar los cuellos de botella clave.'
  },
  design: {
    num: '02',
    name: 'DESIGN',
    desc: 'Arquitectura de información, wireframing interactivo y diseño de componentes con rigor en accesibilidad, ritmo visual y jerarquía.'
  },
  build: {
    num: '03',
    name: 'BUILD',
    desc: 'Desarrollo Full-Stack modular, código limpio y testeable, arquitecturas desacopladas y microservicios escalables.'
  },
  optimize: {
    num: '04',
    name: 'OPTIMIZE',
    desc: 'Pruebas de usabilidad reales, medición de KPIs de conversión y refinamiento continuo basado en analítica de producto.'
  }
};

export const codeSnippets = {
  react: `// Custom Hook para micro-interacciones suaves
import { useState, useEffect } from 'react';

export function useInteractionMetric(elementId) {
  const [metrics, setMetrics] = useState({ clicks: 0, hoverTime: 0 });

  useEffect(() => {
    const el = document.getElementById(elementId);
    let start = 0;
    
    const onEnter = () => { start = performance.now(); };
    const onLeave = () => {
      const duration = performance.now() - start;
      setMetrics(prev => ({ ...prev, hoverTime: prev.hoverTime + duration }));
    };

    el?.addEventListener('mouseenter', onEnter);
    el?.addEventListener('mouseleave', onLeave);
    return () => {
      el?.removeEventListener('mouseenter', onEnter);
      el?.removeEventListener('mouseleave', onLeave);
    };
  }, [elementId]);

  return metrics;
}`,
  node: `// Endpoint de Transformación y Validación de Datos
import express from 'express';
const router = express.Router();

router.post('/api/v1/metrics/track', async (req, res) => {
  const { eventType, userId, latencyMs } = req.body;
  
  if (!eventType || !userId) {
    return res.status(400).json({ error: 'Parámetros requeridos faltantes' });
  }

  // Registro optimizado con auditoría asíncrona
  const record = await db.analytics.insert({
    eventType,
    userId,
    latencyMs: latencyMs ?? 0,
    timestamp: new Date()
  });

  return res.status(201).json({ success: true, id: record.id });
});`,
  sql: `-- Consulta de Cohortes y Tasa de Retención
SELECT 
  DATE_TRUNC('month', u.created_at) AS cohort_month,
  COUNT(DISTINCT u.id) AS total_users,
  COUNT(DISTINCT CASE WHEN a.event_date >= u.created_at + INTERVAL '30 days' THEN u.id END) AS retained_30d,
  ROUND(
    COUNT(DISTINCT CASE WHEN a.event_date >= u.created_at + INTERVAL '30 days' THEN u.id END) * 100.0 / 
    NULLIF(COUNT(DISTINCT u.id), 0), 2
  ) AS retention_rate_pct
FROM users u
LEFT JOIN activity_logs a ON u.id = a.user_id
GROUP BY 1
ORDER BY 1 DESC;`,
  design: `/* Design Tokens: Variables Centralizadas */
:root {
  --token-color-primary: #2563eb;
  --token-color-surface: #ffffff;
  --token-radius-bento: 24px;
  --token-transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --token-shadow-soft: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
  --token-spacing-base: 1rem;
}`
};
