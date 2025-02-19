using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CapaEntidad;
using CapaNegocio;
namespace PrimeraAppNetCoreMVC.Controllers
{
    public class LaboratorioController : Controller
    {
        // GET: LaboratorioController
        public ActionResult LaboratorioView()
        {
            return View();
        }

        // GET: LaboratorioController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: LaboratorioController/Create
        public ActionResult Create()
        {
            return View();
        }

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
            LaboratorioBL obj = new LaboratorioBL();
            return obj.filtrarLaboratorio(nombre, direccion, personacontacto);
        }

        // POST: LaboratorioController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: LaboratorioController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: LaboratorioController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: LaboratorioController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: LaboratorioController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
