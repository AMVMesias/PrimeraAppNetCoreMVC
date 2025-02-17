using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public abstract class BaseDAL
    {
        protected List<T> EjecutarListado<T>(string storeProcedure, Func<SqlDataReader, T> mapeo, SqlParameter[] parametros = null)
        {
            List<T> lista = new List<T>();
            try
            {
                var drd = parametros == null ?
                    DatabaseHelper.ExecuteReader(storeProcedure, CommandType.StoredProcedure) :
                    EjecutarConParametros(storeProcedure, parametros);

                if (drd != null)
                {
                    while (drd.Read())
                    {
                        lista.Add(mapeo(drd));
                    }
                }
            }
            catch (Exception)
            {
                lista = null;
            }
            return lista;
        }

        private SqlDataReader EjecutarConParametros(string storeProcedure, SqlParameter[] parametros)
        {
            SqlConnection conn = new SqlConnection(DatabaseHelper.GetConnectionString());
            SqlDataReader reader = null;

            try
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand(storeProcedure, conn))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddRange(parametros);
                    reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
                }
            }
            catch (Exception)
            {
                if (conn.State == ConnectionState.Open)
                {
                    conn.Close();
                }
                conn.Dispose();
                throw;
            }

            return reader;
        }
    }
}