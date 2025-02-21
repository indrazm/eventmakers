import { Card, CardBody } from "@heroui/react";
import React from "react";

export const CategoryCard = ({ category, totalEvents }) => {
  return (
    <Card isHoverable isPressable shadow="none" radius="sm" className="border">
      <CardBody className="p-6 text-center">
        <h3>{category}</h3>
        <p>{totalEvents || 0} events</p>
      </CardBody>
    </Card>
  );
};
