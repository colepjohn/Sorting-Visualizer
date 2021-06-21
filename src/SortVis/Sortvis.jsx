import React from 'react';

import './Sortvis.css';
import {BubbleSortAnimations, InsertionSortAnimations, MergeSortAnimations, QuickSortAnimations, SelectionSortAnimations} from './Sortalgo/Sortalgo';

export default class Sortvis extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        let array = []
        for ( let i = 0; i < 300; i++ ) {
            array.push( this.randomInt( 5, 500 ) );
        } this.setState({array});
    }

    randomInt( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) + min );
    }

    // BEST: O(N^2) AVERAGE: 0(N^2) WORST: O(N^2)
    SelectionSort() {
        const [ arr, animations ] = SelectionSortAnimations( this.state.array );
        for ( let i = 0; i < animations.length; i++ ) {
            const bars = document.getElementsByClassName( 'bars' );
            if ( animations[i][0] === 'compare1' || animations[i][0] === 'compare2' ) {
                const color = ( animations[i][0] === 'compare1' ) ? 'white' : 'rgb( 223, 121, 25 )';
                const [ tmp, ione, itwo ] = animations[i];
                const bar1 = bars[ione].style;
                const bar2 = bars[itwo].style;
                
                setTimeout(() => {
                    bar1.backgroundColor = color;
                    bar2.backgroundColor = color;
                }, i * 0.6 );
            } else {
                const [ tmp, index, nheight ] = animations[i];
                const bar = bars[index].style;
                setTimeout(() => {
                    bar.height = `${nheight}px`;
                }, i * 0.6 );
            }
        }
    }

    // BEST: O(N) AVERAGE: O(N^2) WORST: O(N^2)
    BubbleSort() {
        const [ arr, animations ] = BubbleSortAnimations( this.state.array );
        for ( let i = 0; i < animations.length; i++ ) {
            const bars = document.getElementsByClassName( 'bars' );
            if ( animations[i][0] === 'compare1' || animations[i][0] === 'compare2' ) {
                const color = ( animations[i][0] === 'compare1' ) ? 'white' : 'rgb( 223, 121, 25 )';
                const [ tmp, ione, itwo ] = animations[i];
                const bar1 = bars[ione].style;
                const bar2 = bars[itwo].style;

                setTimeout(() => {
                    bar1.backgroundColor = color;
                    bar2.backgroundColor = color;
                }, i * 0.6 );
            } else {
                const [ tmp, index, nheight ] = animations[i];
                if ( index === -1 ) { continue; }
                const bar = bars[index].style;
                setTimeout(() => {
                    bar.height = `${nheight}px`;
                }, i * 0.6 );
            }
        }
    }

    // BEST: O(N) AVERAGE: O(N^2) WORST: O(N^2)
    InsertionSort() {
        const [ arr, animations ] = InsertionSortAnimations( this.state.array );
        for ( let i = 0; i < animations.length; i++ ) {
            const bars = document.getElementsByClassName( 'bars' );
            if ( animations[i][0] === 'compare1' || animations[i][0] === 'compare2' ) {
                const color = ( animations[i][0] === 'compare1' ) ? 'white' : 'rgb( 223, 121, 25 )';
                const [ tmp, ione, itwo ] = animations[i];
                const bar1 = bars[ione].style;
                const bar2 = bars[itwo].style;

                setTimeout(() => {
                    bar1.backgroundColor = color;
                    bar2.backgroundColor = color;
                }, i * 0.6 );
            } else {
                const [ tmp, index, nheight ] = animations[i];
                const bar = bars[index].style;
                setTimeout(() => {
                    bar.height = `${nheight}px`;
                }, i * 0.6 );
            }
        }
    }

    QuickSort() {
        const [ arr, animations ] = QuickSortAnimations( this.state.array );
        for ( let i = 0; i < animations.length; i++ ) {
            const bars = document.getElementsByClassName( 'bars' );
            if ( animations[i][0] === 'compare1' || animations[i][0] === 'compare2' ) {
                const color = ( animations[i][0] === 'compare1' ) ? 'white' : 'rgb( 223, 121, 25 )';
                const [ tmp, ione, itwo ] = animations[i];
                const bar1 = bars[ione].style;
                const bar2 = bars[itwo].style;

                setTimeout(() => {
                    bar1.backgroundColor = color;
                    bar2.backgroundColor = color;
                }, i * 0.6 );
            } else {
                const [ tmp, index, nheight ] = animations[i];
                if ( index == -1 ) {
                    continue;
                }
                const bar = bars[index].style;
                setTimeout(() => {
                    bar.height = `${nheight}px`;
                }, i * 0.6 );
            }
        }
    }

    MergeSort() {
        const [ arr, animations ] = MergeSortAnimations( this.state.array );
        for ( let i = 0; i < animations.length; i++ ) {
            const bars = document.getElementsByClassName( 'bars' );
            if ( animations[i][0] === 'compare1' || animations[i][0] === 'compare2' ) {
                const color = ( animations[i][0] === 'compare1' ) ? 'white' : 'rgb( 223, 121, 25 )';
                const [ tmp, ione, itwo ] = animations[i];
                const bar1 = bars[ione].style;
                const bar2 = bars[itwo].style;

                setTimeout(() => {
                    bar1.backgroundColor = color;
                    bar2.backgroundColor = color;
                }, i * 0.6 );
            } else {
                const [ tmp, index, nheight ] = animations[i];
                const bar = bars[index].style;
                setTimeout(() => {
                    bar.height = `${nheight}px`;
                }, i * 0.6 );
            }
        }
    }

    render () {
        const {array} = this.state;
        
        return (
            <div className="array-container">
                <div className = 'nav-bar'>
                    <button id="button" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button id="button" onClick={() => this.SelectionSort()}>Selection Sort</button>
                    <button id="button" onClick={() => this.BubbleSort()}>Bubble Sort</button>
                    <button id="button" onClick={() => this.InsertionSort()}>Insertion Sort</button>
                    <button id="button" onClick={() => this.QuickSort()}>Quick Sort</button>
                    <button id="button" onClick={() => this.MergeSort()}>Merge Sort</button>
                </div>
                {array.map((value, idx) => (
                    <div 
                    className="bars" 
                    key={idx}
                    style={{height: `${value}px`}}>
                    </div>
                ))}
            </div>
        );
    }
}