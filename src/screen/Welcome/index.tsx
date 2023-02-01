import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  ImageBackground,
  LayoutAnimation,
  Dimensions
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Constants from '../../Constants';
import Icon from '../../components/Icon';
import { Type } from 'react-native-feather';
import WelcomeHeader from '../../components/WelcomeHeader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function WelcomeScreen(props) {
  const { onGoBack, onForward } = props;
  const [gender, setGender] = useState(1);
  const [searchField, setSearchField] = useState('');
  const [infoAdministrative, setInfoAdministrative] = useState(true)
  const [infoExamination, setInfoExamination] = useState(false)
  const [infoSurvival, setInfoSurvival] = useState(false)
  const [infoSpecialist, setInfoSpecialist] = useState(false)
  console.log("search", searchField)
  return (
    <View >
      <WelcomeHeader onGoBack={onGoBack} onChangeText={setSearchField} value={searchField} screenName={'Tiếp đón'} />
      <ScrollView>
        <SearchedItem name={'Lê Thị Thùy Dương'} birth={'30/12/1953'} phoneNumber={'0123456789'} />
        <View style={styles.infoContainer}>
          <Info name={'Thông tin hành chính'} isDetail={infoAdministrative} onPress={() => { setInfoAdministrative(!infoAdministrative) }} />
          {
            infoAdministrative &&
            <View style={styles.detailInfo}>
              <DetailInfo nameInfo={'Đối tượng khám'} isSelect type={'input'} />
              <DetailInfo nameInfo={'Mã khách hàng'} type={'input'} />
              <DetailInfo nameInfo={'Họ tên'} type={'input'} />
              <DetailInfo nameInfo={'Số điện thoại'} type={'input'} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 22,
                  backgroundColor: 'white'
                }}>
                <Text style={[styles.text4, { paddingLeft: 16 }]}>Giới tính <Text style={{ color: Constants.SemanticError }}>*</Text></Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      setGender(1);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                      marginRight: 20,
                    }}>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        borderWidth: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: gender ? Constants.Primary500 : Constants.Neutral400,
                      }}>
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          borderRadius: 5,
                          backgroundColor: gender ? '#3BB549' : '#B4BFC8',
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        paddingLeft: 10,
                        color: gender ? '#52606B' : '#B4BFC8',
                      }}>
                      Nam
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      setGender(0);
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingRight: 16 }}>
                    <View
                      style={{ height: 20, width: 20, borderRadius: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: gender ? '#B4BFC8' : '#3BB549' }}>
                      <View
                        style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: gender ? '#B4BFC8' : '#3BB549', }}
                      />
                    </View>
                    <Text
                      style={{
                        paddingLeft: 10,
                        color: gender ? '#B4BFC8' : '#52606B',
                      }}>
                      Nữ
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <DetailInfo nameInfo={'Tuổi'} type={'input'} />
              <DetailInfo nameInfo={'Ngày sinh'} type={'birth'} />
              <DetailInfo nameInfo={'CMND/CCCD'} type={'input'} />
              <TouchableOpacity style={{ flexDirection: 'row', paddingLeft: 16, paddingTop: 20, backgroundColor: 'white' }}>
                <Icon type={'mcicons'} name="scan-helper" size={20} style={{ marginRight: 12, color: Constants.Primary500 }} />
                <Text style={{ fontSize: 14, color: Constants.Neutral700 }}>Hiển thị thêm thông tin</Text>
              </TouchableOpacity>
            </View>
          }
        </View>
        <View style={styles.infoContainer}>
          <Info name={'Thông tin đăng ký khám'} isDetail={infoExamination} onPress={() => { setInfoExamination(!infoExamination) }} />
          {
            infoExamination &&
            <View style={styles.detailInfo}>
              <DetailInfo nameInfo={'Mã phiếu khám'} type={'input'} isSelect={true} />
              <DetailInfo nameInfo={'Ngày giờ vào khám'} type={'input'} />
              <DetailInfo nameInfo={'Họ tên'} type={'input'} />
              <DetailInfo nameInfo={'Lý do vào viện'} type={'input'} />
              <DetailInfo nameInfo={'Triệu chứng'} type={'input'} />
              <DetailInfo nameInfo={'Bệnh lý'} type={'input'} />
              <DetailInfo nameInfo={'Tiểu sử bệnh bản thân'} type={'input'} />
              <DetailInfo nameInfo={'Tiểu sử bệnh gia đình'} type={'input'} />
              <DetailInfo nameInfo={'Toàn thân'} type={'input'} />
              <DetailInfo nameInfo={'Bộ phận'} type={'input'} />
              <DetailInfo nameInfo={'Chuẩn đoán ban đầu'} type={'input'} />
              <DetailInfo nameInfo={'Dịch vụ yêu cầu'} type={'input'} isSelect={true} />
              <DetailInfo nameInfo={'Bác sĩ khám'} type={'input'} isSelect={true} />
            </View>
          }
        </View>
        <View style={styles.infoContainer}>
          <Info name={'Chỉ số sinh tồn'} isDetail={infoSurvival} onPress={() => { setInfoSurvival(!infoSurvival) }} />
          {
            infoSurvival &&
            <View style={styles.detailInfo}>
              <DetailInfo nameInfo={'Mạch'} type={'input'} />
              <DetailInfo nameInfo={'HA cao (mmHg)'} type={'input'} />
              <DetailInfo nameInfo={'HA thấp (mmHg)'} type={'input'} />
              <DetailInfo nameInfo={'N.Độ (Độ C)'} type={'input'} />
              <DetailInfo nameInfo={'C.Nặng (kg)'} type={'input'} />
              <DetailInfo nameInfo={'Chiều cao (cm)'} type={'input'} />
              <DetailInfo nameInfo={'BMI'} type={'input'} />

            </View>
          }
        </View>
        <View style={styles.infoContainer}>
          <Info name={'Chỉ số chuyên khoa'} isDetail={infoSpecialist} onPress={() => { setInfoSpecialist(!infoSpecialist) }} />
          {
            infoSpecialist &&
            <View style={styles.detailInfo}>
              <DetailInfo nameInfo={'Chỉ số chuyên khoa 1'} type={'input'} />
              <DetailInfo nameInfo={'Chỉ số chuyên khoa 2'} type={'input'} />
              <DetailInfo nameInfo={'Chỉ số chuyên khoa 3'} type={'input'} />
              <DetailInfo nameInfo={'Chỉ số chuyên khoa 4'} type={'input'} />
            </View>
          }
        </View>
        <View style={{ marginBottom: 88 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { marginLeft: 16, marginRight: 16, marginBottom: 88 },
            ]}
            onPress={onForward}>
            <Text style={[styles.text, { color: 'white', height: 50 }]}>
              Đăng kí khám
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const SearchedItem = ({ name, birth, phoneNumber }) => {
  return (
    <TouchableOpacity style={{ marginTop: 12, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, flexDirection: 'row', backgroundColor: 'white' }}>
      <View style={{ width: 46, height: 46, borderRadius: 23, backgroundColor: '#8ACDFF', marginRight: 12, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#40ACFF' }}>TD</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.searchName}>{name}</Text>
          <Icon name={'dots-horizontal'} type={'mcicons'} size={24} style={{ color: Constants.Neutral700 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon type={'feather'} name={'calendar'} style={{ color: Constants.disable }} size={14} />
            <Text style={styles.searchInfo}>{birth}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon type={'fontawesome5'} name={'phone-alt'} style={{ color: Constants.disable }} size={14} />
            <Text style={styles.searchInfo}>{phoneNumber}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const Info = ({ isDetail, name, onPress }) => {
  return (
    <View style={styles.info}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={onPress}
      >
        <Feather
          name={isDetail ? 'minus-square' : 'plus-square'}
          size={20}
          style={[{ paddingRight: 10, }, styles.icon]}
        />
        <Text style={styles.textInfo}>{name}</Text>
      </TouchableOpacity>
      {name == 'Thông tin hành chính' && isDetail && (
        <TouchableOpacity>
          <Icon type='feather' name="rotate-cw" size={16} style={{ color: Constants.Neutral600 }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const DetailInfo = ({
  nameInfo,
  type,
  isSelect,
  onSelect,
  ...rest
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 22,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'white'
      }}>
      <Text style={styles.text4}>{nameInfo}</Text>
      {type == 'input' && (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#EFF1F4',
            flexDirection: 'row',
          }}>
          <TextInput
            style={{ width: 216, padding: 0, textAlign: 'right' }}
            {...rest}
          />
          {isSelect && (
            <TouchableOpacity onPress={onSelect} style={{ position: 'absolute', right: 0 }}>
              <Text>Chọn</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      {type == 'birth' && (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#EFF1F4',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TextInput style={{ width: 216, padding: 0 }} {...rest} />
          <TouchableOpacity>
            <Feather name="calendar" size={20} style={{ color: Constants.Neutral400, position: 'absolute', right: 0 }} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#3BB549',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: Constants.Neutral900,
  },
  info: {
    height: 48,
    // width: windowWidth,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  text4: {
    fontSize: 14,
    color: '#677987',
  },
  textInfo: {
    fontSize: 16,
    lineHeight: 24,
    color: Constants.Neutral700,
  },
  space: {
    height: 10,
    backgroundColor: '#E5E5E5',
  },
  infoContainer: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  icon: {
    color: Constants.Primary500
  },
  searchName: {
    color: Constants.Neutral700,
    fontSize: 16,
    fontWeight: "bold"
  },
  searchInfo: {
    color: Constants.Neutral600,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 8
  },
  detailInfo: {
    paddingBottom: 16
  }
});
