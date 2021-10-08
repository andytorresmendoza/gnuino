import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiderbarService {

//id 1
  Administrador: any[] = [
    {
      titulo:'Legajo',
      icono:'mdi mdi-account',
      submenu: [  
        {titulo:'Empleado', url:'../mantenimientos/listarempleado'},
 
      ]
      
    },
    {
      titulo:'Seguridad',
      icono:'mdi mdi-account-key',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Usuarios', url:'../mantenimientos/listarusuarios'},
        {titulo:'Perfil Usuarios', url:'../mantenimientos/listarperfilusuario'}, 
        {titulo:'Tema', url:'../dashboard/account-settings'},
      ]
      
    },
    {
      titulo:'Mantenimientos 1',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Banco', url:'../mantenimientos/listarbanco'},
        {titulo:'NroCuenta', url:'../mantenimientos/listarnrocuenta'},
        {titulo:'Categoria', url:'../mantenimientos/listarcategoria'},
        {titulo:'Modelo', url:'../mantenimientos/listarmodelo'},
        {titulo:'Producto', url:'../mantenimientos/listarproducto'},
        {titulo:'Proveedor', url:'../mantenimientos/listarproveedor'},
        {titulo:'Estado FLujo', url:'../mantenimientos/listarestadoflujo'},
        {titulo:'Tipo Documento', url:'../mantenimientos/listartipodocumento'},
        {titulo:'Tipo Devolucion', url:'../mantenimientos/listartipodevolucion'},
        {titulo:'Tipo Ingreso', url:'../mantenimientos/listartipoingreso'},
        {titulo:'Tipo Salida', url:'../mantenimientos/listartiposalida'},
        {titulo:'Tipo Pago', url:'../mantenimientos/listartipopago'},
        {titulo:'Unidad de Medida', url:'../mantenimientos/listarunidadmedida'},
        {titulo:'Almacén', url:'../mantenimientos/listaralmacen'}
     
        
      ]
      
    },
    {
      titulo:'Mantenimientos 2',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [

        {titulo:'Cliente', url:'../mantenimientos/listarcliente'},
        {titulo:'Campaña Venta', url:'../mantenimientos/listarcampania'},
        {titulo:'Banco Venta', url:'../mantenimientos/listarbancoventa'},
        {titulo:'Precio Venta', url:'../mantenimientos/listarprecioventa'},
        {titulo:'Precio Delivery', url:'../mantenimientos/listarpreciodelivery'},
        
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
      {titulo:'Orden Venta', url:'../venta/listarordenventa'},
      {titulo:'Pre-Delivery', url:'../venta/listarpredelivery'},
        // {titulo:'Venta', url:'../kardex/listarordencompra'}, 
       
      ]
      
    },
    {
      titulo:'Delivery',
      icono:'mdi mdi-motorbike',
      submenu: [
   
      {titulo:'Entrega Productos', url:'../venta/listardeliverytodos'}, 
        // {titulo:'Entrega Producto'}, 
      ]
      
    },
    {
      titulo:'Venta Tienda',
      icono:'mdi mdi-cart',
      submenu: [
   
      {titulo:'Venta Directa', url:'../venta/listarventadirecta'}, 
        // {titulo:'Entrega Producto'}, 
      ]
      
    },
    {
      titulo:'Reportes',
      icono:'mdi mdi-cart',
      submenu: [
   
      {titulo:'Reporte Stock', url:'../venta/ReporteStock'}, 
      {titulo:'Reporte Movimientos', url:'../venta/Movimientos'}, 
      {titulo:'Reporte Clientes', url:'../venta/Clientes'}, 
      {titulo:'Reporte Proveedores', url:'../venta/Proveedores'},  
      {titulo:'Reporte Ordenes Venta', url:'../venta/ordenVenta'}, 
     {titulo:'Reporte Venta Directa', url:'../venta/VentaTienda'}, 
        // {titulo:'Entrega Producto'}, 
      ]
      
    }
  ]
    //ID2
    Vendedor: any[] = [
    
   
      {
        titulo:'Mantenimientos 2',
        icono:'mdi mdi-folder-multiple-outline',
        submenu: [
  
          {titulo:'Cliente', url:'../mantenimientos/listarcliente'},
               
        ]
        
      },
      {
        titulo:'Kardex',
        icono:'mdi mdi-truck-delivery',
        submenu: [
     
          {titulo:'Kardex', url:'../kardex/Listarkardex'},

  
      
   
        ]
        
      },
      {
        titulo:'Ventas',
        icono:'mdi mdi-cart',
        submenu: [  
        {titulo:'Cotización Venta', url:'../venta/listarventa'},
        {titulo:'Orden Venta', url:'../venta/listarordenventa'},
        {titulo:'Pre-Delivery', url:'../venta/listarpredelivery'},
          // {titulo:'Venta', url:'../kardex/listarordencompra'}, 
         
        ]
        
      },
      {
        titulo:'Delivery',
        icono:'mdi mdi-motorbike',
        submenu: [
     
        {titulo:'Entrega Producto', url:'../venta/listardeliverytodos'}, 
      
        ]
        
      },
      {
        titulo:'Venta Tienda',
        icono:'mdi mdi-cart',
        submenu: [
     
        {titulo:'Venta Directa', url:'../venta/listarventadirecta'}, 
        
        ]
        
      }
    ]
//id 3
  Almacen: any[] = [
   
    {
      titulo:'Mantenimientos 1',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [

        {titulo:'Categoria', url:'../mantenimientos/listarcategoria'},
        {titulo:'Modelo', url:'../mantenimientos/listarmodelo'},
        {titulo:'Producto', url:'../mantenimientos/listarproducto'},
        {titulo:'Tipo Ingreso', url:'../mantenimientos/listartipoingreso'},
        {titulo:'Tipo Salida', url:'../mantenimientos/listartiposalida'},
        {titulo:'Unidad de Medida', url:'../mantenimientos/listarunidadmedida'},
        {titulo:'Almacén', url:'../mantenimientos/listaralmacen'} 
        
      ]
      
    },
    {
      titulo:'Mantenimientos 2',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [ 
           {titulo:'Precio Venta', url:'../mantenimientos/listarprecioventa'},
         
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
      
    } 
    
    
  ]

  //id 4
  Delivery: any[] = [
    
    {
      titulo:'Delivery',
      icono:'mdi mdi-motorbike',
      submenu: [
   
      {titulo:'Entrega Producto', url:'../venta/listardelivery'}, 
        // {titulo:'Entrega Producto'}, 
      ]
      
    } 
  ]
  //id 5
  Marketing: any[] = [
    {
      titulo:'Legajo',
      icono:'mdi mdi-account',
      submenu: [  
        {titulo:'Empleado', url:'../mantenimientos/listarempleado'},
 
      ]
      
    },
    {
      titulo:'Seguridad',
      icono:'mdi mdi-account-key',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Usuarios', url:'../mantenimientos/listarusuarios'},
        {titulo:'Perfil Usuarios', url:'../mantenimientos/listarperfilusuario'}, 
        {titulo:'Tema', url:'../dashboard/account-settings'},
      ]
      
    },
    {
      titulo:'Mantenimientos 1',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [
        // {titulo:'Main', url:'mantenimientos'},
        {titulo:'Banco', url:'../mantenimientos/listarbanco'},
        {titulo:'NroCuenta', url:'../mantenimientos/listarnrocuenta'},
        {titulo:'Categoria', url:'../mantenimientos/listarcategoria'},
        {titulo:'Modelo', url:'../mantenimientos/listarmodelo'},
        {titulo:'Producto', url:'../mantenimientos/listarproducto'},
        {titulo:'Proveedor', url:'../mantenimientos/listarproveedor'},
        {titulo:'Estado FLujo', url:'../mantenimientos/listarestadoflujo'},
        {titulo:'Tipo Documento', url:'../mantenimientos/listartipodocumento'},
        {titulo:'Tipo Devolucion', url:'../mantenimientos/listartipodevolucion'},
        {titulo:'Tipo Ingreso', url:'../mantenimientos/listartipoingreso'},
        {titulo:'Tipo Salida', url:'../mantenimientos/listartiposalida'},
        {titulo:'Tipo Pago', url:'../mantenimientos/listartipopago'},
        {titulo:'Unidad de Medida', url:'../mantenimientos/listarunidadmedida'},
        {titulo:'Almacén', url:'../mantenimientos/listaralmacen'}
     
        
      ]
      
    },
    {
      titulo:'Mantenimientos 2',
      icono:'mdi mdi-folder-multiple-outline',
      submenu: [

        {titulo:'Cliente', url:'../mantenimientos/listarcliente'},
        {titulo:'Campaña Venta', url:'../mantenimientos/listarcampania'},
        {titulo:'Banco Venta', url:'../mantenimientos/listarbancoventa'},
        {titulo:'Precio Venta', url:'../mantenimientos/listarprecioventa'},
        {titulo:'Precio Delivery', url:'../mantenimientos/listarpreciodelivery'},
        
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
      {titulo:'Orden Venta', url:'../venta/listarordenventa'},
      {titulo:'Pre-Delivery', url:'../venta/listarpredelivery'},
        // {titulo:'Venta', url:'../kardex/listarordencompra'}, 
       
      ]
      
    },
    {
      titulo:'Delivery',
      icono:'mdi mdi-motorbike',
      submenu: [
   
      {titulo:'Entrega Productos', url:'../venta/listardeliverytodos'}, 
        // {titulo:'Entrega Producto'}, 
      ]
      
    },
    {
      titulo:'Venta Tienda',
      icono:'mdi mdi-cart',
      submenu: [
   
      {titulo:'Venta Directa', url:'../venta/listarventadirecta'}, 
        // {titulo:'Entrega Producto'}, 
      ]
      
    }
  ]
  constructor() { }
}
