import React, { FC } from "react";

interface ConfirmationItemInterface {
  title: string;
  data: string | number;
}

const ConfirmationItem: FC<ConfirmationItemInterface> = ({
  title,
  data,
}: ConfirmationItemInterface): JSX.Element => (
  <div className="confirmation-item">
    <p className="confirmation-item__title">{title}</p>
    <p className="confirmation-item__data">{data}</p>
  </div>
);

export default ConfirmationItem;
