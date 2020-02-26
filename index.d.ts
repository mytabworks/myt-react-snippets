import React from 'react'

declare module 'myt-react-snippets'
 
interface PrefixProps {
    enter: string;
    exit: string;
}

interface Callbacks {
    (): void
}

export interface TransitionAnimationProps { 
    in:         boolean;
    children:   JSX.Element;
    timing?:    number;
    className?: string;
    mounted?:   boolean;
    prefix?:    PrefixProps;
    onEnter?:   Callbacks;
    onEntering?:Callbacks;
    onEntered?: Callbacks;
    onExit?:    Callbacks;
    onExiting?: Callbacks;
    onExited?:  Callbacks;
}

export const Animation: React.FunctionComponent<TransitionAnimationProps>

export const Transition: React.FunctionComponent<TransitionAnimationProps>

interface Position {
    y: number;
    x: number;
}

export interface PositionProps {
    current: Position;
    previous: Position;
}

interface ScreenProps {
    innerHeight: number;
    innerWidth: number;
}

interface InitialProps {
    target?: JSX.Element;
    extra_top: number;
    onEntered: Callbacks;
    onExited: Callbacks;
}

interface DefaultSpyProps<I, P, A> {
    (first: I, second: P, third: A): void
}

export interface AdditivesProps {
    isInitial: boolean;
    isScrollDown: boolean;
    isScrollUp: boolean;
    screen: ScreenProps;
    main: JSX.Element;
    defaultSpy?: DefaultSpyProps<InitialProps, PositionProps, AdditivesProps>;
}

export interface ScrollCallback<P, A> {
    (first: P, second: A): void
}

export interface ScrollPosition<one, two>{
    (first: one, second: two): void
}

export const useScrollPosition: ScrollPosition<ScrollCallback<PositionProps, AdditivesProps>, JSX.Element|string>