/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
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
} from 'react-native';


import { WelcomeScreen } from './src/screen/Welcome';
import HeaderText from './src/components/HeaderText';
import { ForgotPassword } from './src/screen/ForgotPassword'
import Constants from './src/Constants';
import { ResignPassword } from './src/screen/ResignPassword';
import LoginScreen from './src/screen/Login';
import WelcomeExaminationList from './src/screen/WelcomeExaminationList';
// import RootNavigation from './src/navigation/RootNatigation';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const [page, setPage] = useState(1)

  //page 4 Tiếp đón
  const [searchField, setSearchField] = useState('')
  const [gender, setGender] = useState(1)

  const onGoBack = () => {
    setPage(page - 1)
  }
  const onForward = () => {
    setPage(page + 1)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: page == 4 || page == 5 ? '#E5E5E5' : 'white' }}>
      {page == 1 && <LoginScreen onForward={onForward} />
      }
      {
        page == 2 && <ForgotPassword onGoBack={onGoBack} onForward={onForward} />
      }
      {
        page == 3 && <ResignPassword onGoBack={onGoBack} onForward={onForward} />
      }
      {
        page == 4 && <WelcomeScreen onGoBack={onGoBack} onForward={onForward} />
      }
      {
        page == 5 && <WelcomeExaminationList onGoBack={onGoBack} onForward={onForward} />
      }
    </SafeAreaView >
  );
};

export default App;
