using CapaEntidad;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;

namespace CapaDatos
{
    public class SucursalDAL
    {
        public List<SucursalCLS> listarSucursales()
        {
            List<SucursalCLS> lista = new List<SucursalCLS>();

            IConfigurationBuilder builder = new ConfigurationBuilder();
            builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
            var root = builder.Build();
            var cadenaDato = root.GetConnectionString("cn");

            using (SqlConnection cn = new SqlConnection(cadenaDato))
            {
                cn.Open();
                try
                {
                    using (SqlCommand cmd = new SqlCommand("uspListarSucursal", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        SqlDataReader drd = cmd.ExecuteReader();

                        if (drd != null)
                        {
                            SucursalCLS oSucursalCLS;
                            lista = new List<SucursalCLS>();
                            while (drd.Read())
                            {
                                oSucursalCLS = new SucursalCLS();
                                oSucursalCLS.IIDSUCURSAL = drd.GetInt32(0);
                                oSucursalCLS.NOMBRE = drd.GetString(1);
                                oSucursalCLS.DIRECCION = drd.GetString(2);
                                lista.Add(oSucursalCLS);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    cn.Dispose();
                    lista = null;
                }
            }
            return lista;
        }
    }
}
