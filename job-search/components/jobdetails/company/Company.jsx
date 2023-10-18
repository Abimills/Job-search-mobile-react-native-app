import React from 'react'
import { View, Text ,Image} from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'


const Company = ({companyLogo,jobTitle,companyName,location}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
        source={{
          uri:checkImageURL(companyLogo) ? companyLogo : 'https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png',
        }}
        style={styles.logoImage}
        />
    </View>
    <View style={styles.jobTitleBox}>
      <Text style={styles.jobTitle}>{jobTitle}</Text>

    </View>
    <View style={styles.companyInfoBox}>
      <Text style={styles.companyName}>{companyName}</Text>
    <View style={styles.locationBox}>
      <Image source={icons.location}
      resizeMode='contain'
      style={styles.locationImage}
      />

    </View>
    </View>
    </View>
  )
}

export default Company