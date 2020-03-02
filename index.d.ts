import React from 'react'

declare module 'myt-react-snippets'
 
interface SuffixProps {
    enter: string;
    exit: string;
}

interface Callbacks {
    (): void
}

export interface TransitionAnimationProps { 
    in:         boolean;
    children:   React.ReactNode;
    timing?:    number;
    className?: string;
    stayMountedWhenExited?:   boolean;
    suffix?:    SuffixProps;
    onEnter?:   Callbacks;
    onEntering?:Callbacks;
    onEntered?: Callbacks;
    onExit?:    Callbacks;
    onExiting?: Callbacks;
    onExited?:  Callbacks;
    onMounted?:  Callbacks;
}

export const Animation: React.FunctionComponent<TransitionAnimationProps>

export const Transition: React.FunctionComponent<TransitionAnimationProps>

export interface TransitionGroupProps {
    children: React.ReactNode[]
}

export const TransitionGroup: React.Component<TransitionGroupProps>

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
    target?: React.ReactNode;
    extra_top: number;
    onEntered: Callbacks;
    onExited: Callbacks;
}

interface DefaultSpyProps<I, P, A> {
    (first: I, second: P, third: A): void
}

export interface ImproviseProps {
    isInitial: boolean;
    isScrollDown: boolean;
    isScrollUp: boolean;
    screen: ScreenProps;
    main: React.ReactNode;
    defaultSpy?: DefaultSpyProps<InitialProps, PositionProps, ImproviseProps>;
}

export interface ScrollCallback<P, A> {
    (first: P, second: A): void
}

export interface ScrollPosition<one, two>{
    (first: one, second: two): void
}

export const useScrollPosition: ScrollPosition<ScrollCallback<PositionProps, ImproviseProps>, React.ReactNode|string>