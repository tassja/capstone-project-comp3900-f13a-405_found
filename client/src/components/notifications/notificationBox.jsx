import React from "react";
import NotificationCard from "./notificationCard";
import { Typography } from "antd";
const axios = require("axios");

const NotificationBox = (props) => {
  const notifications = props.notifications;
  return (
    <div style={{ display: props.expanded ? "block" : "none" }}>
      {notifications.length != 0
        ? notifications.map((notification, i) => (
            <NotificationCard key={i} {...notification} />
          ))
        : null}
    </div>
  );
};

export default NotificationBox;
