import { Text } from 'react-native'
import { Link, router } from 'expo-router'
import StyledDiv from '../../../components/SyledDiv';

import {
    StyleSheet,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
  } from 'react-native';



export default function Home(){

  const changeStatus = (id: number, status: String, toWalk: String) => {
    router.push(`../../paginas/${id}`)
  }

    const DATA = [
        {
          title: '1° Andar',
          data: ['N°01', 'N°02', 'N°03'],
        },
        {
          title: '2° Andar',
          data: ['N°04', 'N°05', 'N°06'],
        },
        {
          title: '3° Andar',
          data: ['N°07', 'N°08', 'N°09'],
        },
        {
          title: '4° Andar',
          data: ['N°10', 'N°11'],
        },
      ];

    return (
        <>
       <StyledDiv onPress={ () => { changeStatus(202,"Pendente","Primeiro Andar") }} toWalk='Primeiro Andar' roomNumer='N° 202' statusRoom='Pendente' colorStatus='red'></StyledDiv>
       <StyledDiv onPress={() => { changeStatus(203,"Em Serviço","Segundo Andar") }} toWalk='Segundo Andar' roomNumer='N° 202' statusRoom='Em Serviço' colorStatus='yellow'></StyledDiv>
       <StyledDiv onPress={() => { changeStatus(204,"Disponivel","Terceiro Andar") }} toWalk='Terceiro Andar' roomNumer='N° 202' statusRoom='Disponivel' colorStatus='green'></StyledDiv>
     
      

        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    },
    header: {
      fontSize: 32,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
    },
  });
  