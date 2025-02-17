﻿using CapaEntidad;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class SucursalDAL : BaseDAL
    {
        public List<SucursalCLS> listarSucursales()
        {
            return EjecutarListado("uspListarSucursal",
                drd => new SucursalCLS
                {
                    IIDSUCURSAL = drd.GetInt32(0),
                    NOMBRE = drd.GetString(1),
                    DIRECCION = drd.GetString(2)
                });
        }

        public List<SucursalCLS> filtrarSucursal(string nombresucursal)
        {
            var parametros = new[]
            {
                new SqlParameter("@nombresucursal", nombresucursal)
            };

            return EjecutarListado("uspFiltrarSucursal",
                drd => new SucursalCLS
                {
                    IIDSUCURSAL = drd.GetInt32(0),
                    NOMBRE = drd.GetString(1),
                    DIRECCION = drd.GetString(2)
                },
                parametros);
        }
    }
}