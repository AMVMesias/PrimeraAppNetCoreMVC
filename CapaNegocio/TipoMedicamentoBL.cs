﻿using CapaDatos;
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

            if (string.IsNullOrEmpty(objTipoMedicamento.nombre))
            {
                return 0; // Retorna 0 para indicar error
            }

            // Llama al método de la capa de datos para guardar
            return tipoMedicamentoDAL.GuardarDatos(objTipoMedicamento);
        }

        public TipoMedicamentoCLS recuperarTipoMedicamento(int idTipoMedicamento)
        {
            if (idTipoMedicamento <= 0)
            {
                return null;
            }

            var lista = tipoMedicamentoDAL.recuperarTipoMedicamento(idTipoMedicamento);
            return lista?.FirstOrDefault();
        }
    }
}
