import { Router } from 'express';
import authRoutes from './auth.routes';
import negocioRoutes from './negocio.routes';
import inventarioRoutes from './inventario.routes';
import productosRoutes from './productos.routes';
import clientesRoutes from './clientes.routes';
import ventasRoutes from './ventas.routes';
import cajaRoutes from './caja.routes';
import reportesRoutes from './reportes.routes';
export const router = Router();
router.use(authRoutes);
router.use(negocioRoutes);
// inventario va antes que productos: si no, /productos/:id capturaría /productos/stock-bajo
router.use(inventarioRoutes);
router.use(productosRoutes);
router.use(clientesRoutes);
router.use(ventasRoutes);
router.use(cajaRoutes);
router.use(reportesRoutes);