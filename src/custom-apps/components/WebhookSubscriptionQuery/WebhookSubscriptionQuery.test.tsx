import "@testing-library/jest-dom";

import {
  WebhookEventTypeAsyncEnum,
  WebhookEventTypeSyncEnum,
} from "@dashboard/graphql";
import { Fetcher } from "@graphiql/toolkit";
import { ApolloMockedProvider } from "@test/ApolloMockedProvider";
import { render, screen } from "@testing-library/react";
import React from "react";

import WebhookSubscriptionQuery from "./WebhookSubscriptionQuery";

jest.mock("@graphiql/toolkit", () => ({
  clear: jest.fn(),
  createGraphiQLFetcher: jest.fn(_x => jest.fn() as Fetcher),
}));

jest.mock("react-intl", () => ({
  useIntl: jest.fn(() => ({
    formatMessage: jest.fn(x => x.defaultMessage),
  })),
  defineMessages: jest.fn(x => x),
}));

jest.mock("@saleor/macaw-ui", () => ({
  useTheme: jest.fn(() => () => ({})),
  useStyles: jest.fn(() => () => ({})),
  makeStyles: jest.fn(() => () => ({})),
  DialogHeader: jest.fn(() => () => <></>),
}));

beforeEach(() => {
  window.localStorage.clear();
});

describe("WebhookSubscriptionQuery", () => {
  it("is available on the webhook page", async () => {
    // Arrange
    const props = {
      query: "",
      setQuery: jest.fn(),
      data: {
        syncEvents: [] as WebhookEventTypeSyncEnum[],
        asyncEvents: [] as WebhookEventTypeAsyncEnum[],
        isActive: false,
        name: "",
        targetUrl: "",
        subscriptionQuery: "",
      },
    };
    // const user = userEvent.setup();

    // Act
    render(
      <ApolloMockedProvider>
        <WebhookSubscriptionQuery {...props} />
      </ApolloMockedProvider>,
    );

    // Assert
    expect(screen.queryByTestId("graphiql-container")).toBeInTheDocument();
    expect(screen.queryByTestId("graphiql-container2")).not.toBeInTheDocument();
  });

  /*
  it("triggers setQuery when user enters text", async () => {
    // Arrange
    const props = {
      query: '',
      setQuery: jest.fn(),
      data: {
        syncEvents: [] as WebhookEventTypeSyncEnum[],
        asyncEvents: [] as WebhookEventTypeAsyncEnum[],
        isActive: false,
        name: '',
        targetUrl: '',
        subscriptionQuery: ''
      }
    };
    const user = userEvent.setup();

    // Act
    const { getByTestId } = render(<WebhookSubscriptionQuery {...props} />);
    const graphiQLContainer = getByTestId("graphiql-container");
    user.type(graphiQLContainer, "{}");

    // Assert
    expect(props.setQuery).toHaveBeenCalled();
  });
  */
});
