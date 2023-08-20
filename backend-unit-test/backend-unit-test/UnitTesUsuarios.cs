using backend.connection;
using backend.entidades;
using backend.servicios;

namespace backend_unit_test
{
    public class UnitTesUsuarios
    {
        public UnitTesUsuarios()
        {
            BDManager.GetInstance.ConnectionString = "workstation id=MichaelVeliz.mssql.somee.com;packet size=4096;user id=MichaelVeliz_SQLLogin_1;pwd=f336oc54j6;data source=MichaelVeliz.mssql.somee.com;persist security info=False;initial catalog=MichaelVeliz";
        }

        [Fact]
        public void Usuarios_Get_Verificar_NotNull()
        {
            var result = UsuariosServicios.ObtenerTodo<Usuarios>();
            Assert.NotNull(result);
        }
        [Fact]

        public void Usuarios_GetById_VerificarItem()
        {
            var result = UsuariosServicios.ObtenerById<Usuarios>(1);
            Assert.Equal(1, result.Id);
            
        }

        [Fact]

        public void Usuarios_Insertar()
        {
            Usuarios usuariosTemp = new()
            {
                NombreCompleto = "Nombre Test",
                UserName = "UserName Test",
                Password = "Password Test"
            };

            var result = UsuariosServicios.InsertUsuario(usuariosTemp);
            Assert.Equal(1, result);
        }

    }
}