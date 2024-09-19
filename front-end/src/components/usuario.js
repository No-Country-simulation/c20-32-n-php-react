import React   from 'react';
import axios from 'axios';
import _ from 'lodash';
import {
  Messager, DataGrid, GridColumn, Form, Dialog, TextBox,  Label, LinkButton, ButtonGroup , ComboBox, PasswordBox
} from 'rc-easyui';
import './index.css';

class Usuario extends React.Component {


 
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageSize: 10,
      data: [], //grid operaciones 
      datax: [], //exclusvo para combo box
      valuer: "", // Valor para el segundo ComboBox (cbxRol)
      datar: this.getData(), // Datos estáticos para el segundo ComboBox -rol        
      pagePosition: "bottom",
      filterable: false,
      pageOptions: {
        layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'sep', 'manual', 'info']
      },
      selectionMode: 'single',
      editingRow: null,
      model: {
        id_persona:'',
        nombres: '',
        paterno: '',
        materno: '',
        direccion: '',
        telefono: '',
        mobile: '',
        fecha_nacimiento: ''  
      },
      rules: {
        'nombre_usuario': ['required', 'length[3,250]'], 
       'email': ['required','length[3,250]' ],        
       'password': ['required','length[3,250]' ],        
        'id_persona':['required'],        
      },
      errors: {},
      title: 'usuarios',
      closed: true,
      value: "", // Initial selected value for combo box persona
      user: {
        username: null,
        password1: null
      }      
       
    };
    
  }


  // Función para manejar el cambio en el campo de fecha
  handleInputChange = (e, field) => {
    const value = e.target.value;
    this.setState(prevState => ({
      model: {
        ...prevState.model,
        [field]: value
      }
    }));
  };
 
  // handleChange(value) {
  //   this.setState({ value: value })
  // }  
  handleChange(name, value) {
    let user = this.state.user;
    user[name] = value;
    this.setState({ user: user })
  }  

  componentDidMount() {  
    this.fetchData();     
  }

  fetchData = async () => {
    try {
      const response = await axios.get('https://cursotekaba.zeabur.app/api/usuarioPersona/');
      this.setState({ data: response.data });
    } catch (error) {
      console.error('Error al buscar datos de Usuario-Persona', error);
    }
  };

saveRow = async () => {

    const validarEmail= (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }      

    const  validarContrasena = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
        if (regex.test(password)) {
            return true;
        } else {
            return " debe contener al menos una mayúscula y un número.";
        }
    }  

    this.form.validate(async () => {
        if(this.form.valid()) {
            let row = Object.assign({}, this.state.editingRow, this.state.model);
            let url = 'https://cursotekaba.zeabur.app/api/usuario/';
            let method = 'post';
            let blnValidFields = true;
            if(row.password !== "" && row.password1 !== ""){
            row.password = row.password.trim();
            row.password1 = row.password1.trim();  
            }

            const strPwd1 = row.password;
            const strPwd2 = row.password1;
            let strMensajeValPwd = "";    
            
            console.log("row ");          
            console.log(row);      

            if (!validarEmail(row.email)  ) {
                alert("El correo electrónico no es válido");   
                blnValidFields=false; 
            }          

            if (!_.isEqual(strPwd1,strPwd2)) {
                alert("Las contraseñas deben coincidir");
                blnValidFields = false;
            }
            else{
                strMensajeValPwd= validarContrasena(strPwd1);
                if (strMensajeValPwd !== true) {    
                    blnValidFields = false;
                    console.log("La contraseña es inválida pues "+strMensajeValPwd);
                    alert("La contraseña es inválida pues "+strMensajeValPwd)             
                }          
            }      

            if (blnValidFields) {

                if (this.state.editingRow) {
                    //url += row.id;
                    method = 'put';            
                    row.id_user_mod = 0;
                    delete row.nombres;
                }
                if (!this.state.editingRow) {
                    row.id_usuario_reg = 0; 
                    
                }
                delete row.password1;

                console.log("row 2 ");          
                console.log(row); 
            
                try {             

                    const obj_op={
                        method: method,
                        url: url,
                        data: row
                    }

                    console.log("obj ")
                    console.log(obj_op)

                    const api_resp1 = await axios(obj_op);

                    console.log("resp api ")
                    console.log(api_resp1)


                    this.fetchData();
                    this.setState({ closed: true });
                } catch (error) {
                    console.error('Error grabando datos de persona', error);
                }
            
            }
        }
    });    
};

  confirm = async (row) => {
    this.messager.confirm({
      title: "Confirmación",
      msg: "Confirmar la eliminación de este registro?",
      result: async (r) => {
        if (r) {

          const reg_prod = {
            id: row.id_usuario 
          };           
          
          console.log("obj orig "+reg_prod);
          console.log(reg_prod);

          const str_json=JSON.stringify(reg_prod);

          console.log("json "+str_json);

          let obj_ax ={headers: {
            'Content-Type': 'application/json'
          },
          data: str_json ,};

          console.log("obj api "+obj_ax);
          console.log(obj_ax);

          try {
            const api_resp = await axios.delete('https://cursotekaba.zeabur.app/api/usuario/',  obj_ax );

            console.log("res api "+api_resp);
            console.log(api_resp);

            this.fetchData();
          } catch (error) {
            console.error('Error eliminado el registro de usuario', error);
          }
        }
      }
    });
  }   

  fn_home = () => {
    window.location.href = '/Principal_Configuracion';
  };

  fnNuevo = () => {
    this.setState({
      editingRow: null,
      model: {},
      title: 'Adicionar Usuario',
      closed: false
    });
  };

  editRow = (row) => {
    this.setState({
      editingRow: row,
      model: Object.assign({}, row),
      title: 'Editar Usuario',
      closed: false
    });
  };

  async fetchDataCbx() {
    try {
      const url = "https://cursotekaba.zeabur.app/api/persona/";
      const response = await fetch(url);
      const result = await response.json();

      // Format data with concatenated names
      const formattedData = result.map(person => ({
        id: person.id_persona, // Use id_persona for value comparison
        text: `${person.nombres} ${person.paterno} ${person.materno}`.trim() // Concatenate names for display
      }));

      return formattedData;

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  getData() {
    return [
      { valuer: 'estudiante', text: "Estudiante" },
      { valuer: 'instructor', text: "Instructor" },
      { valuer: 'administrador', text: "Administrador" } 
    ];
  }  
 
  renderDialog() { 
 
    this.fetchDataCbx().then((datax) => {
      this.setState({ datax });
    });    

    const row = this.state.model;
    // console.log("row");
    // console.log(row);

    // row.password1 = row.password;
    // console.log("row.password1")
    // console.log(row.password1)

    // console.log("row.password")
    // console.log(row.password)

    // console.log("row.id_persona")
    // console.log(row.id_persona)

    // console.log("row.rol")
    // console.log(row.rol)    


  
    // console.log("row.id_persona");
    // console.log(row.id_persona);
    if (this.state.editingRow) {
      //this.state.value = "";
      //handleChange("");
      //this.setState({ value: "" }); provoca que la pagina este unresponsiva...
      this.state.value = row.id_persona;
      this.state.valuer = row.rol;      
      
    }

    if (!this.state.editingRow) {
      this.state.value = "";
      this.state.valuer = "";            
    }

    let str_id=row.id_usuario;

    if(row.id_usuario ===undefined)
      str_id="N/A";
    
    const { title, closed, rules } = this.state;
    return (
      <Dialog modal title={title} closed={closed} onClose={() => this.setState({ closed: true })}>
        <div className="f-full" style={{ padding: '5px 30px' }}>
          <Form className="f-full"
            ref={ref => this.form = ref}
            model={row}
            rules={rules}
            onValidate={(errors) => this.setState({ errors: errors })}
          >
            <div style={{ marginBottom: 5 }}>
            <Label htmlFor="id_usuario" style={{ width: 112 }}>
              ID : 
            </Label> <Label>{ str_id }</Label>    
            <input  name="id_usuario" id="id_usuario"  type="hidden" value={row.id_usuario}></input>      
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="id_persona" style={{ width: 112 }} >Persona:</Label>
              <ComboBox
                inputId="id_persona"
                id="id_persona"
                name="id_persona"
                data={this.state.datax}
                valueField="id" // Field used for value comparison (adjusted)
                textField="text" // Field used for displaying text
                style={{ width: 450 }}
                value={this.state.value}
                onChange={(value) => this.setState({ value: value })}
              />
                
              <div className="error">{this.getError('id_persona')}</div>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="nombre_usuario" style={{ width: 112 }} >Nombre Usuario:</Label>
              <TextBox id="nombre_usuario" name="nombre_usuario" value={row.nombre_usuario} style={{ width: 450 }} placeholder={"Ingrese su nombre de usario"}></TextBox>
              <div className="error">{this.getError('nombre_usuario')}</div>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="email" style={{ width: 112 }}>Email:</Label>
              <TextBox id="email" name="email" value={row.email} style={{ width: 450 }} placeholder={"Ingrese su email"}></TextBox>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="password" style={{ width: 112 }}>Contraseña 1:</Label>
              <PasswordBox name="password" value={row.password}   iconCls="icon-lock" style={{ width: 450 }} ></PasswordBox>
            </div>    
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="password1" style={{ width: 112 }}>Contraseña 2:</Label>
              <PasswordBox name="password1" value={this.state.user.password1}   iconCls="icon-lock" style={{ width: 450 }} ></PasswordBox>
            </div>      
            <div style={{ marginBottom: 10 }}>
            <Label htmlFor="rol" style={{ width: 112 }} >Rol</Label>
            <ComboBox
              inputId="rol"
              id="rol"
              name="rol"
              data={this.state.datar} 
              valueField="valuer" 
              textField="text" 
              value={this.state.valuer} 
              onChange={(valuer) => this.setState({ valuer })} 
              style={{ width: 450 }}
            />           
                        
            </div>   
              
             
          </Form>
        </div>
        <div className="dialog-button">
          <LinkButton style={{ width: 80 }} onClick={this.saveRow} iconCls="icon-ok">Grabar</LinkButton>
          <LinkButton style={{ width: 80 }} onClick={() => this.setState({ closed: true })} iconCls="icon-cancel">Cerrar</LinkButton>
        </div>
      </Dialog>
    );
  }

  getError(name) {
    const { errors } = this.state;
    if (!errors) {
      return null;
    }
    return errors[name] && errors[name].length ? errors[name][0] : null;
  }

  style1() {
    return { margin: '0 2px' };
  }

  style2() {
    return { margin: '0 2px', width: '80px' };
  }
 

  toggleFilterable = () => {
    this.setState(prevState => ({
      filterable: !prevState.filterable
    }));
  };

  render() {
    return (
      <div style={{ padding: '1px 1px 1px 20px' }}>
        <h2   style={{ textAlign: "left" }} >Operaciones Usuario</h2>
        <div style={{ marginBottom: '20px' }}>
          <LinkButton iconCls="icon-add" style={this.style1()} onClick={this.fnNuevo}>Nuevo</LinkButton>
          <LinkButton onClick={this.toggleFilterable} iconCls="icon-search" style={this.style1()}>Buscar</LinkButton>
          <LinkButton onClick={this.fn_home} iconCls="icon-home" style={this.style1()}>Principal</LinkButton>
        </div>
        <div style={{ marginBottom: '80px' }}>
        <DataGrid
            style={{ height: 450, width: 900 }}
            pagination
            filterable
            columnResizing
            {...this.state}
            
          >
            <GridColumn
              field="rn"
              align="center"
              width="30px"
              title="Nro."
              sortable
              cellCss="datagrid-td-rownumber"
              render={({ rowIndex }) => (
                <span>{rowIndex + 1}</span>
              )}
            />
            <GridColumn
              field="id_usuario"
              title="User Id"
              sortable
              width="30px"
              filterable
            />
            <GridColumn
              field="nombre_usuario"
              title="Nombre Usuario"
              sortable
              filterable
              width="70px"
            />
            <GridColumn
              field="email"
              title="Email"
              sortable
              filterable
              width="120px"
            />
            <GridColumn
              field="nombres"
              title="Nombres Apellidos"                  
              sortable
              width="190px"              
              filterable
            />
            <GridColumn
              field="rol"
              title="Rol"              
              sortable
              width="60px"
              
              filterable
            />            
            <GridColumn
              field="act"
              title="Operaciones"
              align="center"
              width={100}
              render={({ row }) => (
                <div>
                  <ButtonGroup>
                    <LinkButton
                      iconCls="icon-edit"
                      onClick={() => this.editRow(row)}
                    ></LinkButton>
                    <LinkButton
                      iconCls="icon-elim"
                      onClick={() => this.confirm(row)}
                    ></LinkButton>
                  </ButtonGroup>
                  <Messager ref={ref => (this.messager = ref)}></Messager>
                </div>
              )}
            />
          </DataGrid>
          {this.renderDialog()}
        </div>
      </div>
    );
  }
}

export default Usuario;