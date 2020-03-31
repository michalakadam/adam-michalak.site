import { TestBed } from '@angular/core/testing';

import { ArticleDispatcherService } from './article-dispatcher.service';

describe('ArticleDispatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleDispatcherService = TestBed.get(ArticleDispatcherService);
    expect(service).toBeTruthy();
  });
});
