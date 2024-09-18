"use client";
import React, { type ReactNode } from 'react'
import NiceModal from '@ebay/nice-modal-react';

type ModalProviderProps = {
  children: ReactNode;
}

export default function ModalProvider(props: ModalProviderProps)
{
  const { children } = props;
  return (
    <NiceModal.Provider>
      {children}
    </NiceModal.Provider>
  )
}
