﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CapaEntidad;
using CapaDatos;

namespace CapaNegocio
{
    public class LaboratorioBL
    {
        public List<LaboratorioCLS> listarLaboratorios()
        {
            try
            {
                CapaDatos.LaboratorioDAL laboratorioDAL = new CapaDatos.LaboratorioDAL();
                return laboratorioDAL.listarLaboratorios();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al listar laboratorios: " + ex.Message);
                throw;
            }
        }

        public List<LaboratorioCLS> filtrarLaboratorio(string nombre, string direccion, string personacontacto)
        {
            try
            {
                CapaDatos.LaboratorioDAL laboratorioDAL = new CapaDatos.LaboratorioDAL();
                return laboratorioDAL.filtrarLaboratorio(nombre, direccion, personacontacto);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error al filtrar laboratorios: " + ex.Message);
                throw;
            }
        }
    }
}
