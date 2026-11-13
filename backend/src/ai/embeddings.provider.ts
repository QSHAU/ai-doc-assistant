export type EmbeddingMetadata = {
  model: string;
  digest: string;
  format: string;
};

export abstract class EmbeddingsProvider {
  /**
   * Возвращается столько векторов, сколько было передано текстов
   * Вектора идут друг за другом. i-й вектор соответствует i-му тексту
   * Все вектора одной длины. Длина зависит от размерности модели
   * При любой неудаче метод выбрасывает исключение и никогда не возвращает пустой или частичный результат.
   * */
  abstract embedDocuments(texts: string[]): Promise<number[][]>;

  // Метод для получения метаданных используемой модели а именно имени, дайджеста и формата
  abstract getMetadata(): EmbeddingMetadata;

  abstract embedQuery(text: string): Promise<number[]>;
}
