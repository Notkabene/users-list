import { NotificationItem, StateNotificationItem } from "~/components/notifications/interfaces";

export const config = Object.freeze({
  MAX_DISPLAY_ELEMENTS: ref<number>(5),
  AUTO_HIDE: ref<boolean>(false),
  AUTO_HIDE_TIMEOUT: ref<number>(10),
});

export const notificationsList = ref<StateNotificationItem[]>([]);

export const removeNotification = (id: symbol): void => {
  notificationsList.value = notificationsList.value.filter(item => item.id !== id);
};

export function notify(notification: NotificationItem): void {
  if (config.MAX_DISPLAY_ELEMENTS.value === 0)
    return;

  const id = Symbol('id');
  const notificationItem = {
    id,
    title: notification.title ?? '',
    text: notification.text ?? '',
    type: notification.type != null ? notification.type : 'error',
    systemType: notification.systemType ?? null,
  };

  if (notificationsList.value.length >= config.MAX_DISPLAY_ELEMENTS.value)
    notificationsList.value.pop();

  notificationsList.value.unshift(notificationItem);

  if (config.AUTO_HIDE.value)
    setTimeout(() => {
      removeNotification(id);
    }, config.AUTO_HIDE_TIMEOUT.value * 1000);
}

export default {};
