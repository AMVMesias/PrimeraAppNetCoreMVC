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
        public int GuardarTipoMedicamento(TipoMedicamentoCLS objTipoMedicamento)
        {
            // Aquí puedes agregar validaciones de negocio antes de guardar
            // Por ejemplo, verificar que el nombre no esté vacío
            if (string.IsNullOrEmpty(objTipoMedicamento.nombre))
            {
                return 0; // Retorna 0 para indicar error
            }

            // Llama al método de la capa de datos para guardar
            return tipoMedicamentoDAL.GuardarDatos(objTipoMedicamento);
        }
    }
}
