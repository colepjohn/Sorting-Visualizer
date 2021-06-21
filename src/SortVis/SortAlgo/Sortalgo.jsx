import React from 'react';

export function SelectionSortAnimations( array ) {
    const animations = [];
    let arr = array.slice();
    DoSelectionSort( arr, animations );
    array = arr;
    return [ array, animations ];
}

function DoSelectionSort( arr, animations ) {
    const N = arr.length;
    for ( let i = 0; i < N - 1; i++ ) {
        let min = i;
        for ( let j = i + 1; j < N; j++ ) {
            animations.push( [ 'compare1', j, min ] );
            animations.push( [ 'compare2', j, min ] );
            if ( arr[j] < arr[min] ) {
                min = j;
            }
        } 
        animations.push( [ 'swap', min, arr[i] ] );
        animations.push( [ 'swap', i, arr[min] ] );
        [ arr[min], arr[i] ] = [ arr[i], arr[min] ];
    }
}

export function BubbleSortAnimations( array ) {
    const animations = [];
    let arr = array.slice();
    DoBubbleSort( arr, animations );
    array = arr;
    return [ array, animations ];
}

function DoBubbleSort( arr, animations ) {
    const N = arr.length;
    let count = 0;
    let swapped = false;
    while ( swapped === false ) {
        swapped = true;
        for ( let i = 0; i < N - 1 - count; i++ ) {
            animations.push( [ 'compare1', i, i + 1 ] );
            animations.push( [ 'compare2', i, i + 1 ] );
            if ( arr[i] > arr[i+1] ) {
                animations.push( [ 'swap', i, arr[i+1] ] );
                animations.push( [ 'swap', i + 1, arr[i] ] );
                [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ];
                swapped = false;
            }
        } ++count;
    }
}

export function InsertionSortAnimations( array ) {
    const animations = [];
    let arr = array.slice();
    DoInsertionSort( arr, animations );
    array = arr;
    return [ array, animations ];
}

function DoInsertionSort( arr, animations ) {
    for ( let i = 1; i < arr.length; i++ ) {
        let key = arr[i];
        let j = i - 1;
        animations.push( [ 'compare1', j, i ] );
        animations.push( [ 'compare2', j, i ] );
        while ( j >= 0 && key < arr[j] ) {
            animations.push( [ 'swap', j + 1, arr[j] ] );
            arr[j+1] = arr[j];
            j = j - 1;
            if ( j >= 0 ) {
                animations.push( [ 'compare1', j, i ] );
                animations.push( [ 'compare2', j, i ] );
            }
        }
        animations.push( [ 'swap', j+1, key ] );
        arr[j+1] = key;
    }
}

export function QuickSortAnimations( array ) {
    const animations = [];
    let arr = array.slice();
    DoQuickSort( arr, 0, arr.length - 1, animations );
    array = arr;
    return [ array, animations ];
}

function DoQuickSort( arr, sindex, eindex, animations ) {
    let pindex;
    if ( sindex < eindex ) {
        pindex = partition( arr, sindex, eindex, animations );
        DoQuickSort( arr, sindex, pindex - 1, animations );
        DoQuickSort( arr, pindex + 1, eindex, animations );
    }
}

function partition( arr, sindex, eindex, animations ) {
    let pindex = randomInt( sindex, eindex );
    
    animations.push( [ "compare1", pindex, eindex ] );
    animations.push( [ "swap", pindex, arr[eindex] ] );
    animations.push( [ "swap", eindex, arr[pindex] ] );
    animations.push( [ "compare2", pindex, eindex ] );
    [ arr[pindex], arr[eindex] ] = [ arr[eindex], arr[pindex] ];

    let lindex = sindex;

    for( let i = sindex; i < eindex; ++i ) {
        animations.push( [ "compare1", i, eindex ] );
        animations.push( [ "compare2", i, eindex ] );
        if( arr[i] <= arr[eindex] ) {
            animations.push( [ "compare1", i, lindex ] );
            animations.push( [ "swap", i, arr[lindex] ] );
            animations.push( [ "swap", lindex, arr[i] ] );
            animations.push( [ "compare2", i, lindex ] );
            [ arr[i], arr[lindex] ] = [ arr[lindex], arr[i] ];
            lindex++;
        }
    }
    animations.push( [ "compare1", lindex, eindex ] );
    animations.push( [ "swap", eindex, arr[lindex] ] );
    animations.push( [ "swap", lindex, arr[eindex] ] );
    animations.push( [ "compare2", lindex, eindex ] );
    
    [ arr[lindex], arr[eindex] ] = [ arr[eindex], arr[lindex] ];
    return lindex;
}

export function MergeSortAnimations( array ) {
    const animations = [];
    let arr = array.slice();
    DoMergeSort( arr, 0, arr.length - 1, animations );
    array = arr;
    return [ array, animations ];
}

function DoMergeSort( arr, sindex, eindex, animations ) {
    if ( sindex === eindex ) return;

    const mindex = Math.floor( ( sindex + eindex ) / 2 );
    
    DoMergeSort( arr, sindex, mindex, animations );
    DoMergeSort( arr, mindex + 1, eindex, animations );
    Merge( arr, sindex, mindex, eindex, animations );
}

function Merge( arr, sindex, mindex, eindex, animations ) {
    let sarr = []; let i = sindex; let j = mindex + 1;

    while ( i <= mindex && j <= eindex ) {
        animations.push( [ 'compare1', i, j ] );
        animations.push( [ 'compare2', i, j ] );

        if ( arr[i] <= arr[j] ) {
            sarr.push( arr[i++] );
        } else {
            sarr.push( arr[j++] );
        }
    } while ( i <= mindex ) {
        animations.push( [ 'compare1', i, i ] );
        animations.push( [ 'compare2', i, i ] );
        sarr.push( arr[i++] );
    } while ( j <= eindex ) {
        animations.push( [ 'compare1', j, j ] );
        animations.push( [ 'compare2', j, j ] );
        sarr.push( arr[j++] );
    } for ( let i = sindex; i <= eindex; i++ ) {
        animations.push( [ 'compare1', i, i - sindex ] );
        animations.push( [ 'swap', i, sarr[i - sindex] ] );
        animations.push( [ 'compare2', i, i - sindex ] );
        arr[i] = sarr[ i - sindex];
    }
}

function randomInt( min, max ) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}