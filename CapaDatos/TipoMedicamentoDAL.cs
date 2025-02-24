using CapaDatos;
using CapaEntidad;
using System.Data;
using System.Data;
using System.Data.SqlClient;
public class TipoMedicamentoDAL : BaseDAL
{
    public List<TipoMedicamentoCLS> listarTipoMedicamento()
    {
        List<TipoMedicamentoCLS > lista = new List<TipoMedicamentoCLS >();
        try
        {
            string sql = "SELECT IIDTIPOMEDICAMENTO, NOMBRE, DESCRIPCION FROM TipoMedicamento WHERE BHABILITADO = 1";
            using (var drd = DatabaseHelper.ExecuteReader(sql, CommandType.Text))
            {
                if (drd != null)
                {
                    while (drd.Read())
                    {
                        lista.Add(new TipoMedicamentoCLS 
                        {
                            idMedicamento = drd.GetInt32(0),
                            nombre = drd.GetString(1),
                            descripcion = drd.GetString(2)
                        });
                    }
                }
            }
        }
        catch (Exception)
        {
            lista = null;
        }
        return lista;
    }


    public int GuardarDatos(TipoMedicamentoCLS objTipoMedicamento)
    {
        string sqlCommand = "INSERT INTO TipoMedicamento(NOMBRE, DESCRIPCION, BHABILITADO) VALUES(@nombre, @descripcion, 1)";

        SqlParameter[] parametros = new SqlParameter[]
        {
                new SqlParameter("@nombre", objTipoMedicamento.nombre),
                new SqlParameter("@descripcion", objTipoMedicamento.descripcion)
        };

        return EjecutarComandoSQL(sqlCommand, parametros);
    }

    public List<TipoMedicamentoCLS > filtrarTipoMedicamento(string nombreTipoMedicamento)
    {
        List<TipoMedicamentoCLS > lista = new List<TipoMedicamentoCLS >();
        try
        {
            using (SqlConnection conn = new SqlConnection(DatabaseHelper.GetConnectionString()))
            {
                using (SqlCommand cmd = new SqlCommand("uspFiltrarTipoMedicamento", conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@nombreTipoMedicamento", nombreTipoMedicamento);

                    conn.Open();
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        if (drd != null)
                        {
                            while (drd.Read())
                            {
                                lista.Add(new TipoMedicamentoCLS 
                                {
                                    idMedicamento = drd.GetInt32(0),
                                    nombre = drd.GetString(1),
                                    descripcion = drd.GetString(2)
                                });
                            }
                        }
                    }
                }
            }
        }
        catch (Exception)
        {
            lista = null;
        }
        return lista;
    }



    public List<TipoMedicamentoCLS> recuperarTipoMedicamento(int idTipoMedicamento)
    {
        List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
        try
        {
            using (SqlConnection conn = new SqlConnection(DatabaseHelper.GetConnectionString()))
            {
                using (SqlCommand cmd = new SqlCommand("SELECT IIDTIPOMEDICAMENTO, NOMBRE, DESCRIPCION FROM TipoMedicamento WHERE BHABILITADO = 1 AND IIDTIPOMEDICAMENTO = @id", conn))
                {
                    cmd.CommandType = CommandType.Text;
                    cmd.Parameters.AddWithValue("@id", idTipoMedicamento);

                    conn.Open();
                    using (SqlDataReader drd = cmd.ExecuteReader())
                    {
                        while (drd != null && drd.Read())
                        {
                            lista.Add(new TipoMedicamentoCLS
                            {
                                idMedicamento = drd.GetInt32(0),
                                nombre = drd.GetString(1),
                                descripcion = drd.GetString(2)
                            });
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error in recuperarTipoMedicamento: {ex.Message}");
            lista = null;
        }
        return lista;
    }


}












//public List<TipoMedicamentoCLS> listarTipoMedicamento()
//{
//    List<TipoMedicamentoCLS> lista = new List<TipoMedicamentoCLS>();
//    lista.Add(new TipoMedicamentoCLS
//    {
//        idMedicamento = 1,
//        nombre = "Analgésico",
//        descripcion = "Desc 1"
//    });
//    lista.Add(new TipoMedicamentoCLS
//    {
//        idMedicamento = 2,
//        nombre = "Paracetamol",
//        descripcion = "Desc 2"
//    });
//    lista.Add(new TipoMedicamentoCLS
//    {
//        idMedicamento = 1,
//        nombre = "Vitamina C",
//        descripcion = "Desc 3"
//    });
//    return lista;

//}
//}
