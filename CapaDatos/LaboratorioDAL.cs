using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class LaboratorioDAL : BaseDAL
    {
        public List<LaboratorioCLS> listarLaboratorios()
        {
            return EjecutarListado("uspListarLaboratorio",
                drd => new LaboratorioCLS
                {
                    IIDLABORATORIO = drd.GetInt32(0),
                    NOMBRE = drd.GetString(1),
                    DIRECCION = drd.GetString(2),
                    PERSONACONTACTO = drd.GetString(3)
                });
        }

        public List<LaboratorioCLS> filtrarLaboratorio(string nombre, string direccion, string personacontacto)
        {
            var parametros = new[]
            {
        new SqlParameter("@nombre", nombre ?? ""),
        new SqlParameter("@direccion", direccion ?? ""),
        new SqlParameter("@personacontacto", personacontacto ?? "")
    };

            return EjecutarListado("uspFiltrarLaboratorio",
                drd => new LaboratorioCLS
                {
                    IIDLABORATORIO = drd.GetInt32(0),
                    NOMBRE = drd.GetString(1),
                    DIRECCION = drd.GetString(2),
                    PERSONACONTACTO = drd.GetString(3)
                },
                parametros);
        }


    }
}
