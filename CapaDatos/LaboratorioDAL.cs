using CapaEntidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }
}
