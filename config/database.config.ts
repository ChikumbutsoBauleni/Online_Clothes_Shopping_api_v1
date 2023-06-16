import { ConfigService } from "@nestjs/config";
import { Injectable} from "@nestjs/common";

@Injectable()
export class DatabaseConfigService {
    constructor(
        private configService: ConfigService
    ){}
    getHost(): string {
        const host = this.configService.get<string>('DB_HOST');
        return host || 'db4free.net';
    }

    getPort(): number {
        const port = parseInt(this.configService.get<string>('DB_PORT'));
        return port || 3306;
    }

    getUserName(): string {
        const userName = this.configService.get<string>('DB_USERNAME');
        return userName || 'chiku2020';
    }

    getPassword(): string {
        const password = this.configService.get<string>('DB_PASSWORD');
        return password || 'Mr@Chiku2023';
    }

    getDatabaseName(): string {
        const databaseName = this.configService.get<string>('DB_NAME');
        return databaseName || 'online_shopping';
    }
}

