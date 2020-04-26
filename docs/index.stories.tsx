import React, {useState} from 'react';
import { storiesOf } from '@storybook/react-native';
import { Text } from 'react-native';
import Layout from "@kross77/layout";

const getRandomColor = (p = 'FFFFFF', min = "000000") => {
    const letters = '0123456789ABCDEF';
    const color = '#';
    const minPattern = min.split('')
    let finalColor = p.split("").reduce((c, letter, i) => {
        const maxIndex = letters.search(letter);
        const minIndex = letters.search(minPattern[i]);
        console.log({maxIndex, minIndex})
        const randomLetter = letters[Math.floor(Math.random() * (maxIndex-minIndex))+minIndex]
        return c + randomLetter;
    }, color);
    console.log({finalColor})
    return finalColor;
}

const Row = ({children, ...props}) => {
    const [color] = useState(getRandomColor('EEEEEE', 'BBBBBB'))
    return (
        <Layout center w h={50} color={color} {...props}>
            <Text>{children}</Text>
        </Layout>
    )
}
const FixedRow = ({children, ...props}) => {
    const [color] = useState(getRandomColor('EEEEEE', 'BBBBBB'))
    return (
        <Layout center w={200} h={50} color={color} {...props}>
            <Text>{children}</Text>
        </Layout>
    )
}

storiesOf('Block', module)
    .add('w=100 h center', () => (
        <Layout yellow w={100} h center>
            <Text>Hello World</Text>
        </Layout>
    ))
    .add('wh', () => (
        <Layout red wh>
            <Text>Hello Button</Text>
        </Layout>
    ))
    .add('wh ae je', () => (
        <Layout red wh ae je>
            <Text>Hello Button</Text>
        </Layout>
    ))
    .add('f1 jc as', () => (
        <Layout blue f1 jc as>
            <Text>Hello Button</Text>
        </Layout>
    ))
storiesOf('Layout', module)
    .add('w=300', () => (
        <Layout wh center>
            <Layout w={300} color={'yellow'}>
                <Row>Row 1</Row>
                <Row>Row 2</Row>
                <Row>Row 3</Row>
                <Row>Row 4</Row>
            </Layout>
        </Layout>
    ))
    .add('w=300 gap=20', () => (
        <Layout wh center>
            <Layout w={300} gap={20} color={'yellow'}>
                <Row>Row 1</Row>
                <Row>Row 2</Row>
                <Row>Row 3</Row>
                <Row>Row 4</Row>
            </Layout>
        </Layout>
    ))
    .add('w=300 gap=20 ph=20', () => (
        <Layout wh center>
            <Layout ph={20} w={300} gap={20} color={'yellow'}>
                <Row>Row 1</Row>
                <Row>Row 2</Row>
                <Row>Row 3</Row>
                <Row>Row 4</Row>
            </Layout>
        </Layout>
    ))
    .add('fixed row gap=20', () => (
        <Layout wh center>
            <Layout  gap={20} color={'yellow'}>
                <FixedRow>Row 1</FixedRow>
                <FixedRow>Row 2</FixedRow>
                <FixedRow>Row 3</FixedRow>
                <FixedRow>Row 4</FixedRow>
            </Layout>
        </Layout>
    ))
    .add('fixed row gap=20 ph=20 pv=20', () => (
        <Layout wh center>
            <Layout ph={20} pv={20} gap={20} color={'yellow'}>
                <FixedRow>Row 1</FixedRow>
                <FixedRow>Row 2</FixedRow>
                <FixedRow>Row 3</FixedRow>
                <FixedRow>Row 4</FixedRow>
            </Layout>
        </Layout>
    ))
    .add('f1 red', () => (
        <Layout f1 red />
    ))
    .add('f1 red, f2 blue', () => (
        <Layout f1>
            <Layout f1 red/>
            <Layout f2 blue/>
        </Layout>
    ))
