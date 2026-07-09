# FSD (Feature-Sliced Design) — шпаргалка проекта

## Слои (сверху вниз)

```
app/       инициализация приложения: роутер, провайдеры, глобальные стили
pages/     страницы-сборки: login, register, documents, chat
widgets/   (пока не используем) крупные самостоятельные блоки страниц
features/  действия пользователя: auth (войти/зарегистрироваться), upload-document
entities/  бизнес-сущности: user, document, message
shared/    фундамент без бизнес-смысла: api-клиент, ui-кит, хелперы, конфиг
```

## Главное правило: импорты только ВНИЗ

Слой может импортировать только из слоёв ниже себя:

- `app`      → pages, features, entities, shared
- `pages`    → features, entities, shared
- `features` → entities, shared
- `entities` → shared
- `shared`   → ни из кого (самодостаточен)

Нельзя: entities → features, shared → entities, features → features (сосед).
Зачем: стрелки в одну сторону ⇒ циклы импортов невозможны,
изменение верхнего слоя не ломает нижние.

## Структура слайса (папки внутри слоя)

```
entities/user/
  model/    типы, состояние, логика (types.ts, user-context.tsx)
  api/      запросы к бэкенду этой сущности (user-api.ts)
  ui/       компоненты этой сущности (если есть)
  index.ts  ПУБЛИЧНЫЙ API — единственная точка входа снаружи
```

## Публичный API (index.ts)

Снаружи слайса импортируем ТОЛЬКО из его index.ts:
  ✅ import { useUser } from '@/entities/user'
  ❌ import { useUser } from '@/entities/user/model/user-context'

Аналогия с бэкендом: index.ts — это `exports` из NestJS-модуля
(«владею → делюсь явно»). Внутренняя структура слайса — его личное дело.

## Алиасы vs относительные пути (наше соглашение)

- МЕЖДУ слайсами/слоями — алиас: `@/entities/user`, `@/shared/api`
  (читается как внешняя зависимость, не ломается при переносе файла)
- ВНУТРИ слайса — относительные: `./types`, `../api/user-api`
  (слайс — самодостаточная коробка, переносится целиком)
