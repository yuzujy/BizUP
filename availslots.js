import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Table, TableWrapper, Row, Cell } from 'react-native-reanimated-table';

export default class availslots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Staff', 'Service', 'Date', 'Time', ''],
      tableData: [ 
        ['Jessica', 'Eyelash Lift','2023-07-27', '1000'],
      ['Amanda', 'Eyelash Lift', '2023-07-27', '1200'],	
      ['Simon', 'Eyebrow Tattoo', '2023-07-27', '1400'],
      ['Xiao Ming', 'Threading', '2023-07-29', '1200'],		
      ['Jessica', 'Facial', '2023-07-28', '1600'],	
      ['Jessica', 'Eyelash Lift',	'2023-07-27', '1000'],	
      ['Amanda', 'Eyelash Lift', '2023-07-27', '1200'],	
      ['Simon', 'Eyebrow Tattoo', '2023-07-27', '1400'],		
      ['Xiao Ming', 'Threading', '2023-07-27', '1600'],		
      ['Jessica',	'Facial', '2023-07-27',	'1800'], 
      ['Amanda', 'Eyelash Lift', '2023-07-28', '1000'],		
      ['Simon', 'Threading', '2023-07-28', '1200'],
      ['Xiao Ming', 'Eyebrow Tattoo',	'2023-07-28', '1400'],
      ['Jessica',	'Threading', '2023-07-28', '1600'], 	
      ['Amanda', 'Facial', '2023-07-29', '1000'],	
      ['Xiao Ming', 'Eyebrow Tattoo',	'2023-07-29', '1200'],
      ['Jessica', 'Eyelash Lift',	'2023-07-29', '1400'],		
      ['Simon', 'Threading', '2023-07-29', '1600'], 	
      ['Xiao Ming', 'Threading', '2023-07-30', '1000'],	
      ['Jessica', 'Facial', '2023-07-30',	'1200'],	
      ['Simon', 'Facial',	'2023-07-30', '1400'],		
      ['Amanda', 'Eyebrow Tattoo', '2023-07-30', '1600'],		
    ],
      searchText: '',
      startDate: null, // Store the selected start date
      endDate: null, // Store the selected end date
    };
  }

  _alertIndex(index) {
    Alert.alert(`Book this appointment?`);
  }

  // Filter the table data based on the input text and date range
  filterData = () => {
    const { searchText, startDate, endDate } = this.state;
    const filteredData = this.state.tableData.filter((rowData) => {
      const date = new Date(rowData[2]);
      return (
        rowData.some((cellData) =>
          cellData.toLowerCase().includes(searchText.toLowerCase())
        ) &&
        (!startDate || date >= startDate) &&
        (!endDate || date <= endDate)
      );
    });
    return filteredData;
  };

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Book</Text>
        </View>
      </TouchableOpacity>
    );

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Add TextInput for filtering */}
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ searchText: text })}
          placeholder="Search..."
          value={this.state.searchText}
        />

        {/* Add DatePicker for selecting the start date 
        <DatePicker
          style={styles.datePicker}
          date={this.state.startDate}
          mode="date"
          placeholder="Select start date"
          format="YYYY-MM-DD"
          minDate="2023-01-01"
          maxDate="2030-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            this.setState({ startDate: date });
          }}
        /> 
        */}

        {/* Add DatePicker for selecting the end date 
        <DatePicker
          style={styles.datePicker}
          date={this.state.endDate}
          mode="date"
          placeholder="Select end date"
          format="YYYY-MM-DD"
          minDate="2023-01-01"
          maxDate="2030-12-31"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            this.setState({ endDate: date });
          }}
        />
        */}

        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
          {/* Use the filtered data instead of state.tableData */}
          {this.filterData().map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#7bdfe3' },
    head: { height: 40, backgroundColor: '#27b8b0' },
    text: { margin: 7 },
    row: { flexDirection: 'row', backgroundColor: '#fff' },
    btn: { width: 58, height: 22, backgroundColor: '#27b8b0', borderRadius: 10, justifyContent: 'center' },
    btnText: { textAlign: 'center', color: '#fff' },
    input: {
      height: 40,
      borderColor: '#7bdfe3',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
});
