// Sistema de notificações global
// Uso: notify.success('Operação realizada!'), notify.error('Erro ao salvar')

class NotificationSystem {
  constructor() {
    this.notifications = [];
    this.maxNotifications = 5;
    this.onNotificationAdd = null;
    this.onNotificationRemove = null;
  }

  add(message, type = 'info', duration = 4000) {
    const id = Date.now();
    const notification = {
      id,
      message,
      type,
      timestamp: new Date()
    };

    this.notifications.push(notification);

    // Manter apenas os últimos N notifications
    if (this.notifications.length > this.maxNotifications) {
      this.notifications.shift();
    }

    if (this.onNotificationAdd) {
      this.onNotificationAdd(this.notifications);
    }

    // Auto remover após duration
    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }

    return id;
  }

  remove(id) {
    this.notifications = this.notifications.filter(n => n.id !== id);
    if (this.onNotificationRemove) {
      this.onNotificationRemove(this.notifications);
    }
  }

  success(message, duration = 3000) {
    return this.add(message, 'success', duration);
  }

  error(message, duration = 5000) {
    console.error('[Notification Error]', message);
    return this.add(message, 'error', duration);
  }

  warning(message, duration = 4000) {
    return this.add(message, 'warning', duration);
  }

  info(message, duration = 3000) {
    return this.add(message, 'info', duration);
  }

  clear() {
    this.notifications = [];
    if (this.onNotificationRemove) {
      this.onNotificationRemove([]);
    }
  }

  getAll() {
    return [...this.notifications];
  }
}

const notify = new NotificationSystem();
