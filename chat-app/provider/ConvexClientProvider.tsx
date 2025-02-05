"use client";
import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import React from 'react'

type Props = {
  children: React.ReactNode;
};

const CONVEX_URL ="https://academic-minnow-504.convex.cloud" ;

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider  publishableKey="pk_test_bmV1dHJhbC1wb3NzdW0tNjUuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;