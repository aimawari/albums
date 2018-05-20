import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ albumItem }) => {
    const {
        title,
        artist,
        url,
        image,
        thumbnail_image
    } = albumItem;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button
                    onPress={() => {
                        Linking.openURL(url)
                    }}
                >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}

const styles = {
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        flex: 1,
        height: 300,
        width: null
    }

}

export default AlbumDetail;