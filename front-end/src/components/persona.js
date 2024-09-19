import React  from 'react';
import axios from 'axios';
import {
  Messager, DataGrid, GridColumn, Form, Dialog, TextBox,  Label, LinkButton, ButtonGroup 
} from 'rc-easyui';
import './index.css';

class Persona extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      pageSize: 10,
      data: [],
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
        'nombres': ['required', 'length[3,80]'], 
        'paterno': ['required', 'length[3,80]'], 
        'telefono': ['length[0,15]'], 
        'mobile': ['length[0,15]'], 
        'materno': ['length[0,80]'], 
        'direccion': ['length[0,250]'],         
      },
      errors: {},
      title: '',
      closed: true
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

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await axios.get('https://cursotekaba.zeabur.app/api/persona/');
      this.setState({ data: response.data });
    } catch (error) {
      console.error('Error al buscar datos de persona', error);
    }
  };

  saveRow = async () => {
    this.form.validate(async () => {
      if (this.form.valid()) {
        let row = Object.assign({}, this.state.editingRow, this.state.model);
        let url = 'https://cursotekaba.zeabur.app/api/persona/';
        let method = 'post';

        try {

          console.log("row ");          
          console.log(row);

          if (this.state.editingRow) {
            //url += row.id;
            method = 'put';
            row.id_user_mod=0;
             let int_aux_id=row.id_persona;
             console.log("id persona try: ", int_aux_id); 
             row.id_persona=int_aux_id;
             delete row.fecha_registro;
             delete row.id_usuario_reg;
             delete row.fecha_mod;
             delete row.id_usuario_mod;

          }
          if (!this.state.editingRow) 
            row.id_usuario_reg=0; 

          //console.log("Fecha Nacimiento try:", row.fecha_nacimiento);    

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
    });
  };

  confirm = async (row) => {
    this.messager.confirm({
      title: "Confirmación",
      msg: "Confirmar la eliminación de este registro?",
      result: async (r) => {
        if (r) {

          const reg_prod = {
            id_persona: row.id_persona 
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
            const api_resp = await axios.delete('https://cursotekaba.zeabur.app/api/persona/',  obj_ax );

            console.log("res api "+api_resp);
            console.log(api_resp);

            this.fetchData();
          } catch (error) {
            console.error('Error eliminado  datos de persona', error);
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
      title: 'Adicionar Persona',
      closed: false
    });
  };

  editRow = (row) => {
    this.setState({
      editingRow: row,
      model: Object.assign({}, row),
      title: 'Editar Persona',
      closed: false
    });
  };
 
  renderDialog() { 

    const row = this.state.model;
    // console.log("row");
    // console.log(row);
  
    // console.log("row.id_persona");
    // console.log(row.id_persona);
    if (!this.state.editingRow) {
      this.state.value="";
      //handleChange("");
      //this.setState({ value: "" }); provoca que la pagina este unresponsiva...
    }
 
    let str_id=row.id_persona;

    if(row.id_persona ===undefined)
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
            <Label htmlFor="id_persona" style={{ width: 79 , textAlign: "left" }} >ID :</Label>  <Label>{ str_id }</Label> 

            <input  name="id_persona" id="id_persona"    type="hidden"  value={row.id_persona}></input>      
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="nombres">Nombres:</Label>
              <TextBox id="nombres" name="nombres" value={row.nombres} style={{ width: 500 }} placeholder={"Ingrese sus nombres"} ></TextBox>
              <div className="error">{this.getError('nombres')}</div>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="paterno">Paterno:</Label>
              <TextBox id="paterno" name="paterno" value={row.paterno} style={{ width: 500 }} placeholder={"Ingrese sus apellidos paternos"}></TextBox>
              <div className="error">{this.getError('paterno')}</div>
            </div>
            <div style={{ marginBottom: 5 }}>
              <Label htmlFor="materno">Materno:</Label>
              <TextBox id="materno" name="materno" value={row.materno} style={{ width: 500 }} placeholder={"Ingrese sus apellidos maternos"}></TextBox>
            </div>
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="direccion">Dirección:</Label>
              <TextBox id="direccion" name="direccion" value={row.direccion} style={{ width: 500 }} placeholder={"Ingrese su dirección"}></TextBox>
            </div>    
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="telefono">Teléfono:</Label>
              <TextBox id="telefono" name="telefono" value={row.telefono} style={{ width: 150 }} placeholder={"(+cod int)+número"}></TextBox>
            </div>      
            <div style={{ marginBottom: 10 }}>
              <Label htmlFor="mobile">Mobile:</Label>
              <TextBox id="mobile" name="mobile" value={row.mobile} style={{ width: 150 }} placeholder={"(+cod int)+número"}></TextBox>
            </div>   
              
            <div style={{ marginBottom: 1 }}>
            <Label htmlFor="fecha_nacimiento">Fcha Nac:</Label>      
            <input 
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              type="date"
              value={row.fecha_nacimiento || ''} 
              onChange={e => this.handleInputChange(e, 'fecha_nacimiento')}
              placeholder="dia/mes/año"  style={{ width: 150 }}
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
        <h2  style={{ textAlign: "left" }}   >Operaciones Persona</h2>
        <div style={{ marginBottom: '20px' }}>
          <LinkButton iconCls="icon-add" style={this.style1()} onClick={this.fnNuevo}>Nuevo</LinkButton>
          <LinkButton onClick={this.toggleFilterable} iconCls="icon-search" style={this.style1()}>Buscar</LinkButton>
          <LinkButton onClick={this.fn_home} iconCls="icon-home" style={this.style1()}>Principal</LinkButton>
        </div>
        <div style={{ marginBottom: '80px' }}>
        <DataGrid
            style={{ height: 450, width: 800 }}
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
              field="id_persona"
              title="Pers Id"
              sortable
              width="40px"
              filterable
            />
            <GridColumn
              field="nombres"
              title="Nombres"
              sortable
              filterable
            />
            <GridColumn
              field="paterno"
              title="Paterno"
              sortable
              filterable
            />
            <GridColumn
              field="materno"
              title="Materno"
              align="right"
              sortable
              width="100px"
              
              filterable
            />
            <GridColumn
              field="telefono"
              title="Teléfono"
              align="right"
              sortable
              width="100px"
              
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

export default Persona;