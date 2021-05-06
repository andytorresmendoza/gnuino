import { Pipe, PipeTransform } from '@angular/core';
import { DataCotizacion } from '../../models/cotizacion';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( cotizaciones: DataCotizacion[], page: number = 0, search: string = '' ): DataCotizacion[] {

    if ( search.length === 0 )
    return cotizaciones.slice(page, page + 5);
  
  const filtrocotizacion = cotizaciones.filter( coti => coti.nroCotizacion.includes( search ) );
  return filtrocotizacion.slice(page, page + 5);

}

}
