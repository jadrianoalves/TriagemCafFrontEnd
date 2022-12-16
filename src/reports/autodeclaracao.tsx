import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
import { useContext } from "react";
  import { DeclarationContextType, UFPADeclarant } from "../@types/IDeclaration"
import { DeclarationContext } from "../shareds/contexts/declarationContext";

  
  
  
  const styles = StyleSheet.create({
    page: {
      
    },
    title: {
      margin: 10,
      padding: 10,
      textAlign: 'center',
      fontSize: '12pt'
      
    },
    body: {
        margin: 30,
        padding: 10,
        textAlign: 'justify',
        fontSize: '10pt',
        
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    paragraph: {
        marginBottom: 5
    }
  });
  
  // Create Document Component
  function BasicDocument() {

    const { declarant, ufpa }  = useContext(DeclarationContext) as DeclarationContextType

    return (
      <PDFViewer style={styles.viewer}>
          <Document>
           <Page size="A4" style={styles.page}>
            <View style={styles.title}>
              <Text>AUTODECLARAÇÃO DE RENDA FAMILIAR</Text>
              <Text>(UFPA - UNIDADE FAMILIAR DE PRODUÇÃO AGRÁRIA)</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.paragraph}>Eu, {declarant.name} {declarant.gender == "Masculino" ? "portador " : "portadora "}do CPF: {declarant.cpf},
              identidade: {declarant.rg} - Orgão expedidor: {declarant.rgEmiter}, residente e {declarant.gender == "Masculino" ? "domiciliado ": "domiciliada "}
              no endereço: {declarant.placeAddress}, {declarant.numberAddress} - {declarant.districtAddress} - {declarant.cityAddress} {declarant.stateAddress}.
              </Text>
              <Text>
                Declaro, na qualidade de responsável pela administração da Unidade Familiar de Produção Agrária (UFPA) {ufpa.name}, situada no endereço: {ufpa.address} - {ufpa.districtAddress} - {ufpa.cityAddress +"-"+ ufpa.stateAdress }
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;