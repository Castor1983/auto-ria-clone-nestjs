import { SetMetadata } from '@nestjs/common';

export const SkipAuth = () => SetMetadata('SKIP_AUTH', true);
