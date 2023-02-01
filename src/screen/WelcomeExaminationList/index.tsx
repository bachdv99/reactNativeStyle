import { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Icon from '../../components/Icon'
import WelcomeHeader from '../../components/WelcomeHeader'
import Constants from '../../Constants'


type Props = {
    onGoBack: () => void,
    onForward: () => void,
    examinationListProps: any
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WelcomeExaminationList = (props: Props) => {
    const { onGoBack, onForward } = props
    const examinationListProps = [1]
    const waitList = examinationListProps.filter(item => item.state == 'wait') || []
    const examList = examinationListProps.filter(item => item.state == 'exam') || []
    const pendingList = examinationListProps.filter(item => item.state == 'pending') || []
    const solveList = examinationListProps.filter(item => item.state == 'solve') || []
    const complete = examinationListProps.filter(item => item.state == 'complete') || []
    const cancel = examinationListProps.filter(item => item.state == 'cancel') || []
    const [searchField, setSearchField] = useState('')
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'all', title: 'Tất cả' },
        { key: 'wait', title: 'Chờ khám' },
        { key: 'exam', title: 'Đang khám' },
        { key: 'pending', title: 'Chờ thực hiện' },
        { key: 'solve', title: 'Đã thực hiện' },
        { key: 'complete', title: 'Hoàn thành' },
        { key: 'cancel', title: 'Hủy khám' },
    ]);

    const allCustomerList = () => (
        <FlatList
            data={examinationListProps}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item, index }) =>
                <Item
                    item={item}
                />
            }
        />
    )

    const renderScene = SceneMap({
        // first: FirstRoute,
        // second: SecondRoute,
        all: allCustomerList,
        wait: customerList,
        exam: customerList,
        pending: customerList,
        solve: customerList,
        complete: customerList,
        seventh: customerList,
        cancel: customerList,
    })

    return (
        <View style={{ height: "100%" }}>
            <WelcomeHeader value={searchField} screenName={'Tiếp đón'} onGoBack={onGoBack} onChangeText={setSearchField} />
            <TabView
                lazy={true}
                renderTabBar={(props) => {
                    return (
                        <TabBar
                            {...props}
                            style={{backgroundColor:'white'}}
                            indicatorStyle={{ backgroundColor: Constants.Primary500 }}
                            activeColor={Constants.Primary500}
                            inactiveColor={Constants.Neutral500}
                            tabStyle={{ width: 'auto' }}
                            scrollEnabled
                        />
                    )
                }}
                navigationState={{ index: index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: windowWidth }}
            />
        </View>
    )
}

export default WelcomeExaminationList;

const customerList = () => (
    <View style={{ flex: 1, backgroundColor: 'red' }} />
)

//Chưa có các trường trong item
const Item = ({ item }: any) => {
    return (
        <View style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 12, paddingRight: 12, marginTop: 10, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ size: 16, fontWeight: '600',color:Constants.Neutral700 }}>Nguyễn Sơn Tùng</Text>
                <TouchableOpacity
                // onPress={onPressMenu}
                >
                    <Icon type={'mcicons'} name={'dots-horizontal'} size={24} style={{color: Constants.Neutral700}} />
                </TouchableOpacity>
            </View>
            <Text style={styles.detailInfoItem}>KH201285498798<Icon type={'entypo'} name={'dot-single'} size={24} style={{}} />01/06/1994<Icon type={'entypo'} name={'dot-single'} size={24} />28 tuổi<Icon type={'entypo'} name={'dot-single'} size={24} />Nữ</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.detailInfoItem} >Ngày khám: 21/07/2022 11:39</Text>
                <Text style={styles.detailInfoItem} >Tổng tiền: 150.000.000</Text>
            </View>
            <View style={{ justifyContent: 'flex-start', flexDirection: 'row',marginTop:13 }}>
                <Text style={[styles.detailInfoItem, { paddingBottom: 3, paddingTop: 3,marginRight:4 }]}>Trạng thái:</Text>
                <View style={{ backgroundColor: '#FFF5E1', borderRadius: 4, borderWidth: 1, borderColor: Constants.SemanticWaring, }}><Text style={{ paddingTop: 3, paddingBottom: 3, paddingLeft: 6, paddingRight: 6, fontSize: 14,color: Constants.SemanticWaring }}>Chờ thực hiện</Text></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity style={[styles.button, { backgroundColor: 'white', borderWidth: 1.5, borderColor: Constants.Primary500 }]}>
                    <Text style={[{ color: Constants.Primary500, fontWeight: 'bold', fontSize: 14 }]}>Chi tiết</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={[{ color: 'white', fontWeight: 'bold', fontSize: 14 }]}>Thanh Toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailInfoItem: {
        size: 12,
        color: Constants.Neutral600,
        paddingTop: 8,
    },
    button: {
        width: 166,
        height: 32,
        marginTop: 16,
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#3BB549',
        alignItems: 'center'
    },
})