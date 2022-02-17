import {
  Card,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import Container from "@saleor/components/Container";
import LimitReachedAlert from "@saleor/components/LimitReachedAlert";
import PageHeader from "@saleor/components/PageHeader";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import TableCellHeader from "@saleor/components/TableCellHeader";
import { ChannelDetailsFragment, RefreshLimitsQuery } from "@saleor/graphql";
import { sectionNames } from "@saleor/intl";
import { Backlink, Button, DeleteIcon, IconButton } from "@saleor/macaw-ui";
import { renderCollection, stopPropagation } from "@saleor/misc";
import { hasLimits, isLimitReached } from "@saleor/utils/limits";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { useStyles } from "./styles";

export interface ChannelsListPageProps {
  channelsList: ChannelDetailsFragment[] | undefined;
  limits: RefreshLimitsQuery["shop"]["limits"];
  navigateToChannelCreate: () => void;
  onBack: () => void;
  onRowClick: (id: string) => () => void;
  onRemove: (id: string) => void;
}

const numberOfColumns = 2;

export const ChannelsListPage: React.FC<ChannelsListPageProps> = ({
  channelsList,
  limits,
  navigateToChannelCreate,
  onBack,
  onRemove,
  onRowClick
}) => {
  const intl = useIntl();
  const classes = useStyles({});

  const limitReached = isLimitReached(limits, "channels");

  return (
    <Container>
      <Backlink onClick={onBack}>
        {intl.formatMessage(sectionNames.configuration)}
      </Backlink>
      <PageHeader
        title={intl.formatMessage(sectionNames.channels)}
        limitText={
          hasLimits(limits, "channels") &&
          intl.formatMessage(
            {
              defaultMessage: "{count}/{max} channels used",
              description: "created channels counter"
            },
            {
              count: limits.currentUsage.channels,
              max: limits.allowedUsage.channels
            }
          )
        }
      >
        <Button
          disabled={limitReached}
          onClick={navigateToChannelCreate}
          variant="primary"
          data-test="add-channel"
        >
          <FormattedMessage
            defaultMessage="Create Channel"
            description="button"
          />
        </Button>
      </PageHeader>
      {limitReached && (
        <LimitReachedAlert
          title={intl.formatMessage({
            defaultMessage: "Channel limit reached",
            description: "alert"
          })}
        >
          <FormattedMessage defaultMessage="You have reached your channel limit, you will be no longer able to add channels to your store. If you would like to up your limit, contact your administration staff about raising your limits." />
        </LimitReachedAlert>
      )}
      <Card>
        <ResponsiveTable>
          <TableHead>
            <TableRow>
              <TableCellHeader>
                <FormattedMessage
                  defaultMessage="Channel Name"
                  description="channel name"
                />
              </TableCellHeader>
              <TableCell className={classes.colRight}>
                <FormattedMessage
                  defaultMessage="Actions"
                  description="table actions"
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderCollection(
              channelsList,
              channel => (
                <TableRow
                  hover={!!channel}
                  key={channel ? channel.id : "skeleton"}
                  className={classes.tableRow}
                  onClick={!!channel ? onRowClick(channel.id) : undefined}
                >
                  <TableCell className={classes.colName}>
                    <span data-test="name">
                      {channel?.name || <Skeleton />}
                    </span>
                  </TableCell>
                  <TableCell className={classes.colAction}>
                    {channelsList?.length > 1 && (
                      <IconButton
                        variant="secondary"
                        color="primary"
                        onClick={
                          channel
                            ? stopPropagation(() => onRemove(channel.id))
                            : undefined
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ),
              () => (
                <TableRow>
                  <TableCell colSpan={numberOfColumns}>
                    <FormattedMessage defaultMessage="No channels found" />
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </ResponsiveTable>
      </Card>
    </Container>
  );
};

ChannelsListPage.displayName = "ChannelsListPage";
export default ChannelsListPage;
