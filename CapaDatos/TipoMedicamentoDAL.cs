using CapaEntidad;

namespace CapaDatos
{
    public class TipoMedicamentoDAL
    {
        public List<TipoMedicamentoCLS> listarTipoMedicamento()
        {
            List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
            lista.Add(new TipoMedicamentoCLS
            {
                idMedicamento = 1,
                nombre = "Analgésico",
                descripcion = "Desc 1"
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idMedicamento = 2,
                nombre = "Paracetamol",
                descripcion = "Desc 2"
            });
            lista.Add(new TipoMedicamentoCLS
            {
                idMedicamento = 1,
                nombre = "Vitamina C",
                descripcion = "Desc 3"
            });
            return lista;

        }
    }
}