using CapaDatos;
using CapaEntidad;
using System.Collections.Generic;

namespace CapaNegocio
{
    public class TipoMedicamentoBL
    {
        private TipoMedicamentoDAL tipoMedicamentoDAL = new TipoMedicamentoDAL();

        public List<TipoMedicamentoCLS> listarTipoMedicamento() // Asegúrate de que este método exista
        {
            return tipoMedicamentoDAL.listarTipoMedicamento();
        }

        public List<TipoMedicamentoCLS> filtrarTipoMedicamento(string nombreTipoMedicamento) // Asegúrate de que este método exista
        {
            return tipoMedicamentoDAL.filtrarTipoMedicamento(nombreTipoMedicamento);
        }
    }
}
