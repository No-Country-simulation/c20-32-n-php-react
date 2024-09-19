import React  from 'react';
import axios from 'axios';
import {
  Messager, DataGrid, GridColumn, Form, Dialog, TextBox,  Label, LinkButton, ButtonGroup , Tabs, TabPanel, ComboBox, NumberBox
} from 'rc-easyui';
import './index.css';

class CursoMD1 extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        total: 0,
        pageSize: 10,
        data: [],
        datax: [],
        id_curso : 0, 
        isButtonDisabled: false,
        valuer: "",
        datar: this.getData(),
        recursosData: [],
        pagePosition: "bottom",
        filterable: false,
        filterableRecurso: false,
        pageOptions: {
          layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'sep', 'manual', 'info']
        },
        selectionMode: 'single',
        editingRow: null,
        model: {
          id_curso : 0, 
        },
        rulesCurso: {
          'titulo': ['required', 'length[3,500]'], 
          'descripcion': ['required', 'length[3,800]'], 
          'contenido': ['required','length[3,800]'], 
          'duracion': ['required','length[1,4]'], 
          'costo': ['required', 'length[1,10]'],
          'valoracion': ['required', 'length[1,10]'],
          'id_persona': ['required' ], 
          
        },
        rules: {
            'nombre': ['required', 'length[3,250]'], 
            'detalle_recurso': ['required', 'length[1,800]'], 
            'tipo_recurso': ['required'],         
          },        
        
        errors: {},
        title: '',
        closed: true,
        activeIndex: 0, // Pestaña activa por defecto (primer panel)
        panels: [{
          name: 'Curso',
          desp: 'A modem (modulator-demodulator) is a device that modulates an analog carrier signal to encode digital information, and also demodulates such a carrier signal to decode the transmitted information.'
        }, {
          name: 'Recursos',
          desp: 'In computing, an image scanner—often abbreviated to just scanner—is a device that optically scans images, printed text, handwriting, or an object, and converts it to a digital image.'
        }]  ,
        dialogType: "",     
        closedPersona: true,  // Controla la ventana de personas
        closedRecurso: true,  // Controla la ventana de recursos         
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
  
    handleChange(value) {
      this.setState({ value: value })
    }  
  
    componentDidMount() {
      this.fetchDataCurso();
      this.fetchDataRecursos(0); 
    }
  
    fetchDataCurso = async () => {
      try {
        const response = await axios.get('https://cursotekaba.zeabur.app/api/cursoListado/');
        this.setState({ data: response.data });
      } catch (error) {
        console.error('Error buscando datos de curso', error);
      }
    };

  // Función para hacer el fetch de los datos de "curso_recurso"
  fetchDataRecursos = async (idCurse) => {
    try {

      //const idCurse = this.state.id_curso;
      console.log("idCurse");
      console.log(idCurse);
      
      let strApiRoute = "https://cursotekaba.zeabur.app/api/curso_recurso/?id=0"

      if(idCurse!==undefined || idCurse!==0){
        strApiRoute = `https://cursotekaba.zeabur.app/api/curso_recurso/?id_curso=${idCurse}`
      }
      console.log("strApiroute")
      console.log(strApiRoute)     

      const response = await axios.get(strApiRoute);
      this.setState({ recursosData: response.data }); // Guardamos los datos de la API en el estado
    } catch (error) {
      console.error('Error buscando datos de recursos', error);
    }
  };    
    
    fSaveCurse = async () => {      
      
      this.form.validate(async () => {
        if (this.form.valid()) {
          let row = Object.assign({}, this.state.editingRow, this.state.model);
          let url = 'https://cursotekaba.zeabur.app/api/curso/';
          let method = 'post';  

          try {
            if (this.state.editingRow) {
              method = 'put';
              row.id_user_mod = 0;
              delete row.fecha_reg;
              delete row.user_ad;
              delete row.fecha_mod;
              delete row.titulos;
            }
  
            if (!this.state.editingRow){
              row.id_usuario_reg = 0; 
              //row.id_persona=99;
            }               

            row.id_instructor = row.id_persona;
            delete row.id_persona;

            console.log("row")
            console.log(row)            
  
            const obj_op = {
              method: method,
              url: url,
              data: row
            }
            
            console.log("obj_op")
            console.log(obj_op)
            
            const api_resp1 = await axios(obj_op);            

            console.log("api_resp1")
            console.log(api_resp1)            

            if (!this.state.editingRow){
              const obj_res = JSON.parse(api_resp1.data);
              
              console.log("id")
              console.log(obj_res.id_nuevo_curso)         

              this.fetchDataCurso();
              //this.setState({ isButtonDisabled: true });

              row.id_curso = obj_res.id_nuevo_curso
              //row.id_curso = obj_res.id_nuevo_curso
              console.log("row.id_curso");
              console.log(row.id_curso);            

              this.setState({
                isButtonDisabled: true,  
                id_curso: obj_res.id_nuevo_curso,      // Deshabilitar el botón              
                
              });

              this.fetchDataRecursos(obj_res.id_nuevo_curso)

            }

            if (this.state.editingRow){
              this.setState({
                isButtonDisabled: true,                
              });   
              this.fetchDataRecursos(row.id_curso)           
            }
            

          } catch (error) {
            console.error('Error grabando datos de curso', error);
          }
        }
      });
    };


    fSaveResource = async () => {
      this.form.validate(async () => {
        if (this.form.valid()) {
          let row = Object.assign({}, this.state.editingRow, this.state.model);
          let url = 'https://cursotekaba.zeabur.app/api/curso_recurso/';
          let method = 'post';  

            row.id_curso = this.state.id_curso;

            //row.id_curso=17;
            console.log("row.id_curso")
            console.log(row.id_curso)         
 
          try {
            if (this.state.editingRow) {
              method = 'put';
              row.user_mod = 0;
              delete row.fecha_reg;
              delete row.user_ad;
              delete row.fecha_mod;
            }
  
            if (!this.state.editingRow) 
              row.user_ad = 0; 

            console.log("row")
            console.log(row)            
  
            const obj_op = {
              method: method,
              url: url,
              data: row
            }
  
            const api_resp1 = await axios(obj_op);
            this.fetchDataRecursos(row.id_curso);
            this.setState({ closedRecurso: true });
          } catch (error) {
            console.error('Error grabando datos de recursos', error);
          }
        }
      });
    };
  
    fConfirmEraseRecurso = async (row) => {
        this.messager.confirm({
          title: "Confirmación",
          msg: "¿Confirmar la eliminación de este registro de recurso-curso?",
          result: async (r) => {
            if (r) {
              const reg_prod = {
                id: row.id_curso_recurso 
              };           
    
              const str_json = JSON.stringify(reg_prod);
    
              let obj_ax = {
                headers: {
                  'Content-Type': 'application/json'
                },
                data: str_json,
              };
    
              try {

                const idCurse = this.state.id_curso;
                console.log("idCurse")
                console.log(idCurse)

                const api_resp = await axios.delete('https://cursotekaba.zeabur.app/api/curso_recurso/', obj_ax);
                this.fetchDataRecursos(idCurse);
              } catch (error) {
                console.error('Error elimiando  registro de recurso', error);
              }
            }
          }
        });
      }


    fConfirmEraseCurso = async (row) => {
      this.messager.confirm({
        title: "Confirmación",
        msg: "¿Confirmar la eliminación de este registro de curso? puede tener recursos",
        result: async (r) => {
          if (r) {
            const reg_prod = {
              id: row.id_curso 
            };         
            console.log("reg_prod")  
            console.log(reg_prod)  
  
            const str_json = JSON.stringify(reg_prod);
  
            let obj_ax = {
              headers: {
                'Content-Type': 'application/json'
              },
              data: str_json,
            };
  
            try {
              const api_resp = await axios.delete('https://cursotekaba.zeabur.app/api/curso/', obj_ax);

              console.log("api_resp")  
              console.log(api_resp)    
              
              this.fetchDataCurso();
            } catch (error) {
              console.error('Error elimiando registro de curso', error);
            }
          }
        }
      });
    }
  
    fn_home = () => {
      window.location.href = '/Principal_Configuracion';
    };
  
    fnNuevoRecurso = () => {
        this.setState({
          editingRow: null,
          model: {}, // Resetea el modelo
          title: 'Adicionar Recurso',
          closed: false,
          activeIndex: 1, // Pestaña "Recursos"
          dialogType: "recurso", // Abrir el diálogo de recursos
          closedRecurso: false,
        });
      };
      
      fNuevoCurso = () => {
        this.setState({
          editingRow: null,
          model: {},
          title: 'Adicionar Curso',
          closed: false,
          activeIndex: 0, // Abrir el diálogo en la pestaña "Curso"
          dialogType: "persona", // Abrir el diálogo de personas
          closedPersona: false, // Abrir el diálogo de personas

        });
      };

      fEditCurse = async (row) => {
        try {
        
          const response = await axios.get(`https://cursotekaba.zeabur.app/api/curso/?id=${row.id_curso}`);

          // Suponiendo que la API devuelve un objeto con los datos del curso
          const cursoData = response.data;
          // console.log("cursoData")
          // console.log(cursoData)

          // console.log("cursoData.descripcion")
          // console.log(typeof cursoData[0].descripcion)
          // console.log(cursoData[0].descripcion)          

          row.descripcion = cursoData[0].descripcion
          row.contenido = cursoData[0].contenido
          row.valoracion = cursoData[0].valoracion
          row.id_persona = cursoData[0].id_instructor

          //this.state.value = row.id_persona;

          this.setState({
            id_curso: row.id_curso,  
            editingRow: row,
            model: Object.assign({}, row),
            title: 'Modificar Curso',
            closed: false,
            activeIndex: 0, // Abrir el diálogo en la pestaña "Curso"
            dialogType: "persona", // Abrir el diálogo de personas
            closedPersona: false, // Abrir el diálogo de personas

          });

        } catch (error) {
          console.error('Error obteniendo datos del curso', error);
        }
      };

      
  
    fEditResourse = (row) => {
      this.setState({
        editingRow: row,
        model: Object.assign({}, row),
        title: 'Editar Recurso',
        closed: false,
        activeIndex: 1, // Pestaña "Recursos"
        dialogType: "recurso", // Abrir el diálogo de recursos
        closedRecurso: false,
      });
    };

    getData() {
        return [
          { valuer: 'video', text: "Video" },
          { valuer: 'Documento', text: "Documento" },
          { valuer: 'Presentación', text: "Presentación" } ,
          { valuer: 'Quiz', text: "Quiz" } ,
        ];
      }      

    renderDialog1() {
        const { closedRecurso, title, rules } = this.state;
        const row = this.state.model;
        const str_id = row.id_curso_recurso || 'N/A'; // ID del recurso

        if (this.state.editingRow) {           
            this.state.valuer = row.tipo_recurso;            
        }
      
        if (!this.state.editingRow) {        
            this.state.valuer = "";            
        }          
        
        return (
          <Dialog modal title={this.state.title} closed={closedRecurso} onClose={() => this.setState({ closed: true })}>
            <div className="f-full" style={{ padding: '5px 30px' }}>
              <Form className="f-full"
                ref={ref => this.form = ref}
                model={row}
                rules={this.state.rules}
                onValidate={(errors) => this.setState({ errors })}
                id="form_recurso"
                name="form_recurso"
              >
                <div style={{ marginBottom: 5 }}>
                  <Label htmlFor="id_curso_recurso" style={{ width: 62 }} >ID :  </Label> <Label>{ str_id }</Label>
                  <input name="id_curso_recurso" id="id_curso_recurso" value={row.id_curso_recurso} type="hidden"  ></input>
                </div>
                <div style={{ marginBottom: 5 }}>
                  <Label htmlFor="nombre" style={{ width: 62 }} >Nombre:</Label>
                  <TextBox inputId="nombre" name="nombre" value={row.nombre} style={{ width:  580 }} placeholder="Ingrese un nombre de recurso"></TextBox>
                  <div className="error">{this.getError('nombre')}</div>
                </div>
                <div style={{ marginBottom: 5 }}>
                  <Label htmlFor="detalle_recurso" style={{ width: 62 }} >Detalle:</Label>
                  <TextBox inputId="detalle_recurso" name="detalle_recurso" value={row.detalle_recurso} style={{ width: "90% ", height: 60  }} placeholder="Ingrese el detalle del recurso"></TextBox>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <Label htmlFor="tipo_recurso" style={{ width: 62 }}>Tipo</Label>
                  <ComboBox
                    inputId="tipo_recurso"
                    id="tipo_recurso"
                    name="tipo_recurso"
                    data={this.state.datar} 
                    valueField="valuer"
                    textField="text"
                    value={this.state.valuer}
                    onChange={(valuer) => this.setState({ valuer })}
                    style={{ width: "90%" }}
                  />
                </div>
              </Form>
            </div>
            <div className="dialog-button">
              <LinkButton style={{ width: 80 }} onClick={this.fSaveResource} iconCls="icon-ok">Grabar</LinkButton>
              <LinkButton style={{ width: 80 }} onClick={() => this.setState({ closedRecurso: true })} iconCls="icon-cancel">Cerrar</LinkButton>
            </div>
          </Dialog>
        );
      }
      
      async fetchDataCbx() {
        try {
          const url = "https://cursotekaba.zeabur.app/api/instructor/";
          const response = await fetch(url);
          const result = await response.json();
    
          // Format data with concatenated names
          const formattedData = result.map(person => ({
            id: person.id_persona, // Use id_persona for value comparison
            text: `${person.nombres}`.trim() // Concatenate names for display
          }));
    
          return formattedData;
    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
    renderDialog() {
      //this.setState({ isSaving: true });
      const { closedPersona, title, rulesCurso, activeIndex      } = this.state;        
      const row = this.state.model;
      const str_id = row.id_curso || 'N/A';
       
      if (this.state.editingRow) {           
        this.state.value = row.id_persona;            
      }

      if (!this.state.editingRow)           
        this.state.value = "";
      
      //this.fetchDataRecursos(row.id_curso);

      this.fetchDataCbx().then((datax) => {
        this.setState({ datax });
      }); 
  
      const tabHeader = (panel) => {
        return (
          <div className="tt-inner">
            <img alt="" src={'https://www.jeasyui.com/demo/main/images/' + panel.name.toLowerCase() + '.png'} />
            <p>{panel.name}</p>
          </div>
        );
      }
  
      return (
        <Dialog 
          modal 
          title={title}           
          closed={closedPersona}
          onClose={() => this.setState({ closed: true })}
          style={{ width: 1000, height: 639 }} // Tamaño aumentado al doble
        >
          <div className="f-full" style={{ padding: '5px 30px' }}>
            <Tabs 
              style={{ height: 540 }} 
              headerHeight={90} 
              activeIndex={activeIndex} // Mostrar el primer panel
              onTabSelect={index => this.setState({ activeIndex: index })} // Cambiar de pestaña
            >
              {
                this.state.panels.map((panel, index) => (
                  <TabPanel key={index} header={() => tabHeader(panel)}>
                    {panel.name === 'Curso' ? (
                      <Form className="f-full"
                        ref={ref => this.form = ref}
                        model={row}
                        rules={rulesCurso}
                        onValidate={(errors) => this.setState({ errors: errors })}
                        id="form_curso"
                        name="form_curso"
                      >
                        <div style={{ marginBottom: 5 }}>
                          <Label htmlFor="id_curso" style={{ width: 82 }} >ID :  </Label> <Label>{ str_id }</Label>
                          <input name="id_curso" id="id_curso"  type="hidden"   value={row.id_curso}></input>
                        </div>
                        <div style={{ marginBottom: 5 }}>
                          <Label htmlFor="titulo" style={{ width: 82 }} >Titulo:</Label>
                          <TextBox inputId="titulo" name="titulo" value={row.titulos} style={{ width: '90%'}} placeholder="Ingrese un titulo de curso"></TextBox>
                          <div className="error">{this.getError('titulo')}</div>
                        </div>
                        <div style={{ marginBottom: 5 }}>
                          <Label htmlFor="descripcion" style={{ width: 82 }} >Descripcion:</Label>
                          <TextBox inputId="descripcion" name="descripcion" value={row.descripcion}  style={{ width: '90%', height: 60 }} placeholder="Ingrese una descripcion de curso"></TextBox>
                          <div className="error">{this.getError('paterno')}</div>
                        </div>
                        <div style={{ marginBottom: 5 }} >
                          <Label htmlFor="contenido" style={{ width: 82 }} >Contenido:</Label>
                          <TextBox inputId="contenido" name="contenido" value={row.contenido} style={{ width: '90%', height: 60 }} placeholder="Ingrese un contenido de curso"></TextBox>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <Label htmlFor="duracion" style={{ width: 82 }} >Duracion:</Label>
                            <NumberBox 
                                inputId="duracion"
                                name="duracion"
                                value={row.duracion}
                                style={{ width: 100 }} 
                                placeholder="duracion"                                 
                            />
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <Label htmlFor="valoracion" style={{ width: 82 }} >Valoracion:</Label>
                          <NumberBox inputId="valoracion" name="valoracion" value={row.valoracion} style={{ width: 100 }} placeholder="valoracion"></NumberBox>
                        </div>
                        <div style={{ marginBottom: 10 }}>
                          <Label htmlFor="costo" style={{ width: 82 }} >Costo:</Label>
                          <NumberBox inputId="costo" name="costo" value={row.costo} style={{ width: 100 }} placeholder="costo" precision={2} ></NumberBox>
                        </div>
                        

                        <div style={{ marginBottom: 5 }}>
                      <Label htmlFor="id_persona" style={{ width: 82 }} >Instructor:</Label>
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
                    <LinkButton style={{ width: 80 }} onClick={this.fSaveCurse}  disabled={this.state.isButtonDisabled} iconCls="icon-ok" >Grabar</LinkButton>                      
                    
                      </Form>
                      
                    ) : (
                        <div>                          
                        <div style={{ padding: '1px 1px 1px 20px' }}>            
            <div style={{ marginBottom: '20px' }}>
              <LinkButton iconCls="icon-add" style={this.style1()} onClick={this.fnNuevoRecurso}>Nuevo</LinkButton>
              <LinkButton onClick={this.toggleFilterableRecurso} iconCls="icon-search" style={this.style1()}>Buscar</LinkButton>
              
            </div>
            <div style={{ marginBottom: '80px' }}>
            <DataGrid
                style={{ height: 400, width: 650 }}
                pagination
                filterable={this.state.filterableRecurso}
                columnResizing
                data={this.state.recursosData}
                
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
                  field="id_curso_recurso"
                  title="Recur Id"
                  sortable
                  width="40px"
                  filterable
                />
                <GridColumn
                  field="nombre"
                  title="Nombres"
                  sortable
                  filterable
                />
                <GridColumn
                  field="detalle_recurso"
                  title="Detalle"
                  sortable
                  filterable
                />
                <GridColumn
                  field="tipo_recurso"
                  title="Tipo"                  
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
                          onClick={() => this.fEditResourse(row)}
                        ></LinkButton>
                        <LinkButton
                          iconCls="icon-elim"
                          onClick={() => this.fConfirmEraseRecurso(row)}
                        ></LinkButton>
                      </ButtonGroup>
                      <Messager ref={ref => (this.messager = ref)}></Messager>
                    </div>
                  )}
                />
              </DataGrid>
              {this.state.dialogType === "recurso" && this.renderDialog1()}


            </div>
          </div>                    
                        </div>
                    )}
                  </TabPanel>
                ))
              }
            </Tabs>
          </div>
          <div className="dialog-button">
            
            <LinkButton style={{ width: 80 }} onClick={() => this.setState({  closedPersona: true , isButtonDisabled: false , id_curso: 0 })} iconCls="icon-cancel">Cerrar</LinkButton>
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
          filterable: !prevState.filterable // Alterna el estado de filtrado
        }));
      };

      toggleFilterableRecurso = () => {
        this.setState(prevState => ({
          filterableRecurso: !prevState.filterableRecurso
        }));
      };

    render() {
      return (
        <div style={{ padding: '1px 1px 1px 20px' }}>
          <h2 style={{ marginBottom: 10 , textAlign: "left"  }}>Operaciones Curso</h2>
          <div style={{ marginBottom: '20px' }}>
            <LinkButton iconCls="icon-add" style={this.style1()} onClick={this.fNuevoCurso}>Nuevo Curso</LinkButton>
            <LinkButton onClick={this.toggleFilterable} iconCls="icon-search" style={this.style1()}>Buscar</LinkButton>
            <LinkButton onClick={this.fn_home} iconCls="icon-home" style={this.style1()}>Principal</LinkButton>
          </div>
          <div style={{ marginBottom: '80px' }}>
            <DataGrid
              style={{ height: 450, width: 800 }}
              pagination
              filterable={this.state.filterable}
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
                field="id_curso"
                title="Curso Id"
                sortable
                width="40px"
                filterable
              />
              <GridColumn
                field="titulos"
                title="Titulos"
                sortable
                filterable
              />
              <GridColumn
                field="descripcion"
                title="Descripcion"
                sortable
                filterable
              />
              <GridColumn
                field="duracion"
                title="Duracion"
                align="right"
                sortable
                width="100px"
                filterable
              />
              <GridColumn
                field="costo"
                title="Costo"
                align="right"
                sortable
                width="100px"
                filterable
              />
            <GridColumn
                field="recursos"
                title="Recursos"
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
                        onClick={() => this.fEditCurse(row)}
                      ></LinkButton>
                      <LinkButton
                        iconCls="icon-elim"
                        onClick={() => this.fConfirmEraseCurso(row)}
                      ></LinkButton>
                    </ButtonGroup>
                    <Messager ref={ref => (this.messager = ref)}></Messager>
                  </div>
                )}
              />
            </DataGrid>
            {this.renderDialog()}
            {/* Mostrar el diálogo de personas si está abierto */}
            {!this.state.closedPersona && this.renderDialog()}

            {/* Mostrar el diálogo de recursos si está abierto */}
            {!this.state.closedRecurso && this.renderDialog1()}            
            
          </div>
        </div>
      );
    }
  }  
  
  export default CursoMD1;
  