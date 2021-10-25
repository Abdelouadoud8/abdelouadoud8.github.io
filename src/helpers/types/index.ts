import React from 'react'

//==============================================================================
// Items
//==============================================================================
export interface User {
 [anyProp: string]: any
}

export interface authData {
 email: string
 password: string
}

//==============================================================================
// State
//==============================================================================

// The code down below is only an example
export interface SyncState {
 syncing: boolean
 lastSynced: string
 error: string
 pendingSync: boolean
}

export interface AuthState {
 loading: boolean
 currentUser: User
 isAuthenticated: boolean
 error: boolean
 msg: string
}

export interface RootState {
 authState: AuthState
 syncState: SyncState
}

//==============================================================================
// API
//==============================================================================

export interface SyncPayload {
 categories: Number[]
}

export interface RootState {
 syncState: SyncState
}

//==============================================================================
// Events
//==============================================================================

export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>
export type ReactSubmitEvent = React.FormEvent<HTMLFormElement> | React.FocusEvent<HTMLInputElement>
