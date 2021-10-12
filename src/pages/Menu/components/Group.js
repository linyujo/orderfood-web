import React from "react";
import Item from "./Item";
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Group = ({ groupMenuData }) => {
  return (
    <>
      {groupMenuData.map((group, idx) => {
        return (
          <Card key={idx} id={group.name}>
            <CardHeader title={group.name}>
            </CardHeader>
            {group.items.map((item) => {
              const { id, name, note, price } = item;
              return (
                <CardContent key={id}>
                  <Item key={id} id={id} name={name} note={note} price={price} />
                </CardContent>
              );
            })}
          </Card>
        );
      })}
    </>
  );
};
export default Group;
