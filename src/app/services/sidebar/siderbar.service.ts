import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {


  menu: any[] = [
    {
      titulo:'Seguridad',
      icono:'mdi mdi-account-key',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Usuarios', url:'../mantenimientos/listarusuarios'},
        {titulo:'Perfil Usuarios', url:'../mantenimientos/listarperfilusuario'},
        {titulo:'Empleado', url:'../mantenimientos/listarempleado'},
        {titulo:'Estado FLujo', url:'../mantenimientos/listarestadoflujo'},
        {titulo:'Tema', url:'../dashboard/account-settings'},
      ]
      
    },
    {
      titulo:'Mantenimientos',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Banco', url:'../mantenimientos/listarbanco'},
        {titulo:'NroCuenta', url:'../mantenimientos/listarnrocuenta'},
        {titulo:'Categoria', url:'../mantenimientos/listarcategoria'},
        {titulo:'Modelo', url:'../mantenimientos/listarmodelo'},
        {titulo:'Producto', url:'../mantenimientos/listarproducto'},
        {titulo:'Proveedor', url:'../mantenimientos/listarproveedor'},
        {titulo:'Tipo Documento', url:'../mantenimientos/listartipodocumento'},
        {titulo:'Tipo Devolucion', url:'../mantenimientos/listartipodevolucion'},
        {titulo:'Tipo Ingreso', url:'../mantenimientos/listartipoingreso'},
        {titulo:'Tipo Salida', url:'../mantenimientos/listartiposalida'},
        {titulo:'Tipo Pago', url:'../mantenimientos/listartipopago'},
        {titulo:'Unidad de Medida', url:'../mantenimientos/listarunidadmedida'},
        {titulo:'Almacén', url:'../mantenimientos/listaralmacen'},
        {titulo:'Cliente', url:'../mantenimientos/listarcliente'},
        
      ]
      
    },
    {
      titulo:'Kardex',
      icono:'mdi mdi-truck-delivery',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Cotización', url:'../kardex/listarcotizacion'},
        {titulo:'Orden Compra', url:'../kardex/listarordencompra'},
        {titulo:'Entrada Almacén', url:'../kardex/listarentrada'},
        {titulo:'Entrada Sin Orden', url:'../kardex/listarentradasinoc'},
        {titulo:'Devolución de Productos', url:'../kardex/devoluciones'}, 
       // {titulo:'Transferencias', url:'../kardex/transferencias'},
        {titulo:'Kardex', url:'../kardex/Listarkardex'},
      //  {titulo:'Prueba', url:'../kardex/ListarPrueba'},

    
 
      ]
      
    },
    {
      titulo:'Ventas',
      icono:'mdi mdi-cart',
      submenu: [  
      {titulo:'Cotización Venta', url:'../venta/listarventa'},
      {titulo:'Orden Venta', url:'../venta/listarventa'},
        // {titulo:'Venta', url:'../kardex/listarordencompra'}, 
       
      ]
      
    },
    {
      titulo:'Delivery',
      icono:'mdi mdi-motorbike',
      submenu: [
   
        // {titulo:'Entrega Producto', url:'../kardex/listarcotizacion'}, 
        {titulo:'Entrega Producto'}, 
      ]
      
    }
  ]
  constructor() { }
}
